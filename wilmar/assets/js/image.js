/*
 * Script for setting image styles select list based on display option select list
 *
 */
function hideUnwantedOptions(){
	$disopt = jQuery('select[name="gw_display_options"] option:selected');
	$imgstyle = jQuery('select[name="image_style"]');
	$selopt = ($disopt).val();
	$imgstyle.find("option:not(:contains('"+$selopt+"'))").attr("disabled","disabled").attr("selected",false);
	$imgstyle.find("option:contains('"+$selopt+"')").attr("disabled",false);
	selectDefault();

}

function selectDefault(){
	var $ = jQuery.noConflict();
	$somval = jQuery('select[name="image_style"] option');
	($somval).each(function(i){
		if(!jQuery($(this)).attr('disabled')){
			if(jQuery($(this)).attr("selected") == true){
				return false;
			}
			if(jQuery($(this)).val().match(/default$/)){
				jQuery($(this)).attr("selected","selected");
				return false;			    
			}
		}
	}); 	
}
;

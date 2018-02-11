<?=$this->layout('index');?>
<div id="page-fat" class="clearfix">
    <div id="main" class="clearfix">
        <div id="content" class="column" role="main">
            <div class="gw-alert">
                <div>


                </div>
            </div>
            <div id="breadcrumbWrapper">
                <div id="breadcrumb">
				<a href="<?=BASE_URL;?>">Home</a> 
				<img width="10" height="10" alt="arrow" src="https://www.gwu.edu/sites/all/themes/gwu_marketing/images/breadcrumb_arrow.png"></img> 
				<span><?=$this->e($front_post_title);?></span></div>
            </div>
            <a id="main-content"></a>
            <div id="block-system-main" class="block block-system first last odd count-1 count-1">
               
                <div class="mainWrapper">

                    <div class="panel-pane pane-node">
						<div class="panel-pane pane-node-content">
                            <header class="major">


                                <h1 class="pane-title">
                                 <?=$post['title'];?></h1>

                            </header>


                            <div class="general-content-no-sidebars">
                                <div class="general-content-grid-no-image">
                                    <div id="general-content-primary">
                                     
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-12 col-xs-12 pos-one">
    <article>
        <p class="col-img">
		<img alt="" class="img-responsive" src="<?=BASE_URL;?>/<?=DIR_CON;?>/uploads/<?=$post['picture'];?>"
                style="height:720px; width:1080px"></p>
        <header class="col-h">
            <h3 class="promo-title"><b><?=$post['picture_description'];?></b></h3>
        </header>
        <section class="col-copy">
            <p><?=htmlspecialchars_decode(html_entity_decode($post['content']));?></p>
            </section>
    </article>
</div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

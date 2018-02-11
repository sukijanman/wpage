
    jQuery.extend(Drupal.settings, {
        "basePath": "\/",
        "pathPrefix": "",
    
        "fancybox": {
            "options": {
                "margin": 120
            },
            "helpers": {
                "title": {
                    "type": "inside"
                },
                "overlay": {
                    "fixed": 0
                },
                "thumbs": {
                    "width": "",
                    "height": "",
                    "position": "top"
                },
                "media": []
            },
            "selectors": ["a.video\na.slider-video\n.slider-video a\n.heroHeroBtnVid a\n.testi-video\n.video-readmore a\na.video-force-small"]
        },
        "lightbox2": {
            "rtl": 0,
            "file_path": "\/(\\w\\w\/)public:\/",
            "default_image": "\/sites\/all\/modules\/contrib\/lightbox2\/images\/brokenimage.jpg",
            "border_size": 10,
            "font_color": "000",
            "box_color": "fff",
            "top_position": "",
            "overlay_opacity": "0.8",
            "overlay_color": "000",
            "disable_close_click": true,
            "resize_sequence": 0,
            "resize_speed": 400,
            "fade_in_speed": 400,
            "slide_down_speed": 600,
            "use_alt_layout": false,
            "disable_resize": false,
            "disable_zoom": false,
            "force_show_nav": false,
            "show_caption": true,
            "loop_items": false,
            "node_link_text": "View Image Details",
            "node_link_target": false,
            "image_count": "Image !current of !total",
            "video_count": "Video !current of !total",
            "page_count": "Page !current of !total",
            "lite_press_x_close": "press \u003Ca href=\u0022#\u0022 onclick=\u0022hideLightbox(); return FALSE;\u0022\u003E\u003Ckbd\u003Ex\u003C\/kbd\u003E\u003C\/a\u003E to close",
            "download_link_text": "",
            "enable_login": false,
            "enable_contact": false,
            "keys_close": "c x 27",
            "keys_previous": "p 37",
            "keys_next": "n 39",
            "keys_zoom": "z",
            "keys_play_pause": "32",
            "display_image_size": "original",
            "image_node_sizes": "()",
            "trigger_lightbox_classes": "",
            "trigger_lightbox_group_classes": "",
            "trigger_slideshow_classes": "",
            "trigger_lightframe_classes": "",
            "trigger_lightframe_group_classes": "",
            "custom_class_handler": 0,
            "custom_trigger_classes": "",
            "disable_for_gallery_lists": true,
            "disable_for_acidfree_gallery_lists": true,
            "enable_acidfree_videos": true,
            "slideshow_interval": 5000,
            "slideshow_automatic_start": true,
            "slideshow_automatic_exit": true,
            "show_play_pause": true,
            "pause_on_next_click": false,
            "pause_on_previous_click": true,
            "loop_slides": false,
            "iframe_width": 600,
            "iframe_height": 400,
            "iframe_border": 1,
            "enable_video": false
        },
        "video_filter": {
            "url": {
                "ckeditor": "\/video_filter\/dashboard\/ckeditor"
            },
            "instructions_url": "\/video_filter\/instructions",
            "modulepath": "sites\/all\/modules\/contrib\/video_filter"
        },
        "nice_menus_options": {
            "delay": 800,
            "speed": "slow"
        },
        "responsive_menus": [{
            "selectors": "#navigation",
            "trigger_txt": "\u003Cspan \/\u003E\u003Cspan \/\u003E\u003Cspan \/\u003E",
            "close_txt": "X",
            "close_size": "18px",
            "position": "right",
            "media_size": "864",
            "show_children": 1,
            "expand_children": 1,
            "expand_txt": "+",
            "contract_txt": "-",
            "remove_attrs": 1,
            "responsive_menus_style": "mean_menu"
        }],
        "better_exposed_filters": {
            "views": {
                "main_header": {
                    "displays": {
                        "main_header_panel_pane": {
                            "filters": []
                        }
                    }
                }
            }
        },
        "urlIsAjaxTrusted": {
            "\/": true
        }
    });
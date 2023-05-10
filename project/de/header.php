<?php
/*
Template Name:De模板
Template Url:https://riced.cn/post-25.html
Description:这是简单的模板
Author:米饭
Author Url:https://riced.cn/
*/
if (!defined('EMLOG_ROOT')) {
    exit('error!');
}
require_once View::getView('module');
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><?php echo $site_title; ?></title>
    <meta name="keywords" content="<?php echo $site_key; ?>"/>
    <meta name="description" content="<?php echo $site_description; ?>"/>
    <link href="<?php echo TEMPLATE_URL; ?>css/style.css?<?php echo Option::EMLOG_VERSION_TIMESTAMP; ?>" type="text/css" rel="stylesheet">
    <link href="<?php echo TEMPLATE_URL; ?>css/style.min.css?<?php echo Option::EMLOG_VERSION_TIMESTAMP; ?>" type="text/css" rel="stylesheet">
    <script type='text/javascript' src='//cdn.staticfile.org/jquery/3.1.1/jquery.min.js?ver=<?php echo Option::EMLOG_VERSION_TIMESTAMP; ?>' id='jquery-min-js'></script>
    <script type='text/javascript' src='//cdn.staticfile.org/qrcodejs/1.0.0/qrcode.min.js?ver=<?php echo Option::EMLOG_VERSION_TIMESTAMP; ?>' id='qrcode-js-js'></script>
    <script type='text/javascript' src='<?php echo TEMPLATE_URL; ?>js/script.js?ver=<?php echo Option::EMLOG_VERSION_TIMESTAMP; ?>' id='script-js-js'></script>
    <script type='text/javascript' src='//cdn.staticfile.org/prettify/r298/prettify.js?ver=<?php echo Option::EMLOG_VERSION_TIMESTAMP; ?>' id='prettify-js'></script>
    <script type='text/javascript' src='//cdn.staticfile.org/instantclick/3.0.1/instantclick.min.js?ver=<?php echo Option::EMLOG_VERSION_TIMESTAMP; ?>' id='instantclick-js'></script>
    <style type='text/css'>img#wpstats{display:none}</style>
    <link rel="icon" href="<?php echo TEMPLATE_URL; ?>images/favicon.png" sizes="32x32" />
    <link rel="icon" href="<?php echo TEMPLATE_URL; ?>images/favicon.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="<?php echo TEMPLATE_URL; ?>images/favicon.png" />
    <meta name="msapplication-TileImage" content="<?php echo TEMPLATE_URL; ?>images/favicon.png" />
    <style type="text/css" id="wp-custom-css">
        .header > .container::before{content:'';position:absolute;top:-4rem;width:4px;height:4px;background-color:red;box-shadow: 4px 0 orange,8px 0 yellow,12px 0 green,16px 0 blue,20px 0 purple;}
    </style>
</head>

<body>
<script>
    $("body").addClass(localStorage.adams_color_style || "").addClass(localStorage.adams_font_style || "");
</script>
<!-- Header -->
<header class="header">
    <section class="container">
        <hgroup itemscope itemtype="https://schema.org/WPHeader">
           <h1 class="fullname"> <?php if($logid){?><?php echo $log_title; ?><?php }else{?><?php echo $blogname; ?><?php }?></h1>
        </hgroup>
        <nav class="social">
            <ul id="menu-socialx" class="menu">
                <li id="menu-item-4834" class="czs-weibo menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" href="javascript:;">没有</a>
                </li>
                <li id="menu-item-4832" class="czs-github-logo menu-item menu-item-type-custom menu-item-object-custom">
                    <a title="GitHub" target="_blank" href="javascript:;">GitHub</a>
                </li>
                <li id="menu-item-4831" class="czs-rss menu-item menu-item-type-custom menu-item-object-custom">
                    <a title="RSS" target="_blank" href="<?php echo BLOG_URL; ?>rss.php">RSS</a>
                </li>
            </ul>
        </nav>
        <nav class="header_nav">
            <ul id="menu-header" class="menu">
                <?php blog_navi(); ?>
            </ul>
        </nav>
    </section>
    <?php include View::getView('ajax/infos'); ?>
</header>

<?php if($logid){?>
    <section class="infos">
        <div class="container">
            <h2 class="fixed-title"></h2>
            <!--<div class="fixed-menus"></div>-->

            <div class="fields">
                    <span><i class="czs-time-l"></i> <time datetime="<?php echo gmdate('Y-n-j', $date); ?>" title="<?php echo gmdate('Y-n-j', $date); ?>"
                                                           itemprop="datePublished" pubdate><?php echo gmdate('Y-n-j', $date); ?></time></span> /
                <span><i class="czs-talk-l"></i> <?php echo $comnum; ?>评</span> /
                <span><i class="czs-thumbs-up-l"></i> <?php echo $views; ?>浏览</span>
            </div>

            <div class="socials">
                <div class="donate">
                    <a href="javascript:;"><i class="czs-coin-l s"></i><i class="czs-coin h"></i> 赏</a>
                    <div class="window">
                        <ul>
                            <li class="alipay"><img src="<?php echo TEMPLATE_URL; ?>images/qrcode.png"/></li>
                            <li><img src="<?php echo TEMPLATE_URL; ?>images/qrcode.png"/></li>
                            </ul>
                    </div>
                </div>
                <div class="share">
                    <a href="javascript:void(0);"
                       data-qrcode="//api.qrserver.com/v1/create-qr-code/?size=150x150&margin=10&data=<?php echo Url::log($logid);?>">
                        <i class="czs-scan-l s"></i><i class="czs-qrcode-l h"></i> 码</a>
                    <div class="qrcode"><div class="img-box"></div> <i>移动设备上继续阅读</i></div>
                </div>
            </div>
        </div>
    </section>
<?php }else{?>
    <section class="infos">
        <div class="container">
            <h2 class="fixed-title"></h2>
            <div class="fixed-menus"></div>
            <div class="placard">
            </div>
        </div>
    </section>
<?php }?>
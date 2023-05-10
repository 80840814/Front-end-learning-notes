<?php
/**
 * 侧边栏组件、页面模块
 */
if (!defined('EMLOG_ROOT')) {
    exit('error!');
}
?>
<?php
function parseBiaoQing($content)
{
    $content = preg_replace_callback('/\:\:\(\s*(呵呵|哈哈|吐舌|惊恐|酷|发飙|嗯哼|流汗|大哭|尴尬|黑脸|超赞|金钱|疑问|尬脸|吐|哦豁|委屈|眯眼笑|哟嚯|超开心|滑稽|眨眼|羡慕|入眠|惊哭|气呼呼|震惊|喷水|爱心|心碎|玫瑰|礼物|咖啡|OK|小无奈|偷笑|坏笑|卧槽|要死|亚麻跌|笑哭了|犀利|理一下|坐端正|完美|吃瓜|摊手|困狗|靠墙看|发现|饮酒|忍笑|警告|炸黑|滑稽汗|打脸|胖次|低看)\s*\)/is',
        'parsePaopaoBiaoqingCallback', $content);

    $content = preg_replace_callback('/\:\*\(\s*(愤怒|装酷|委屈|鄙视|尴尬|魔鬼|惊恐|亲亲|喜欢|猪头|抠鼻|伤心|吃惊|微笑|邪笑|失落|冒汗|闭嘴)\s*\)/is',
        'parseadaiBiaoqingCallback', $content);

    $content = preg_replace_callback('/\:\@\(\s*(发火|羡慕|吐血倒地|吐血|抱抱|鼓掌|呆滞|流泪|嫌疑|灵魂出窍|囧|惊慌|流口水|送花花|不高兴|阴险|捅死你|暗中观察|哲学思考|无奈|嘟嘴|大佬|闭嘴|害羞|脸红|黑线|举白旗|赞|吐舌头)\s*\)/is',
        'parseAruBiaoqingCallback', $content);

    $content = preg_replace_callback('/\:\&\(\s*(蛆音滑稽|蛆音震惊|蛆音生气|蛆音吓哭|蛆音血躺|蛆音疑惑|蛆音捡肥皂|蛆音捂脸|蛆音吐血石化|蛆音哼气|蛆音大笑|蛆音偷看|蛆音卖萌|蛆音好的|蛆音惊吓|蛆音摇头|蛆音睡觉|蛆音无语|蛆音吃瓜|蛆音自恋)\s*\)/is',
        'parseQuyinBiaoqingCallback', $content);
    return $content;
}
?>
<?php
//blog：评论列表
function blog_comments($comments) {
    extract($comments);
    if ($commentStacks): ?>
    <ol class="comment-list">
    <?php endif; ?>
    <?php
    $isGravatar = Option::get('isgravatar');
    foreach ($commentStacks as $cid):
        $comment = $comments[$cid];
        $comment['poster'] = $comment['url'] ? '<a href="' . $comment['url'] . '" target="_blank">' . $comment['poster'] . '</a>' : $comment['poster'];
        ?>
        <li class="comment even thread-even depth-1 parent" id="comment-<?php echo $comment['cid']; ?>">
            <div id="div-comment-<?php echo $comment['cid']; ?>" class="comment-body">
                <div class="comment-author vcard">
                    <img alt="" src="<?php echo getGravatar($comment['mail']); ?>" srcset="<?php echo getGravatar($comment['mail']); ?> 2x" class="avatar avatar-32 photo" height="32" width="32" loading="lazy">
                    <cite class="fn">
                        <?php echo $comment['poster']; ?>
                    </cite>
                    <span class="says">说道：</span>
                </div>
                <div class="comment-meta commentmetadata">
                    <a><?php echo $comment['date']; ?></a>
                </div>
                <p><?php echo $comment['content']; ?></p>
                <div class="reply">
                    <a rel="nofollow" class="comment-reply-link" href="#comment-page-38?replytocom=<?php echo $comment['cid']; ?>#respond" data-commentid="<?php echo $comment['cid']; ?>" data-postid="<?php echo $comment['gid']; ?>" data-belowelement="div-comment-<?php echo $comment['cid']; ?>" data-respondelement="respond" data-replyto="回复" aria-label="回复">回复</a>
                </div>
            </div>
            <?php blog_comments_children($comments, $comment['children']); ?>
        </li>
    <?php endforeach; ?>
    </ol>
<?php } ?>
<?php
//blog：子评论列表
function blog_comments_children($comments, $children) {
    $isGravatar = Option::get('isgravatar');
    ?>
    <ul class="children">
    <?php foreach ($children as $child):
        $comment = $comments[$child];
        $comment['poster'] = $comment['url'] ? '<a href="' . $comment['url'] . '" target="_blank">' . $comment['poster'] . '</a>' : $comment['poster'];
        ?>
        <li class="comment byuser comment-author-admin bypostauthor odd alt depth-4" id="comment-<?php echo $comment['cid']; ?>">
            <div id="div-comment-<?php echo $comment['cid']; ?>" class="comment-body">
                <div class="comment-author vcard">
                    <img alt="" src="<?php echo getGravatar($comment['mail']); ?>" srcset="<?php echo getGravatar($comment['mail']); ?> 2x" class="avatar avatar-32 photo" height="32" width="32" loading="lazy">
                    <cite class="fn">
                        <?php echo $comment['poster']; ?>
                    </cite>
                    <span class="says">说道：</span>
                </div>
                <div class="comment-meta commentmetadata">
                    <a><?php echo $comment['date']; ?></a>
                </div>
                <p><?php echo $comment['content']; ?></p>
                <div class="reply">
                    <a rel="nofollow" class="comment-reply-link" href="#comment-page-38?replytocom=<?php echo $comment['cid']; ?>#respond" data-commentid="<?php echo $comment['cid']; ?>" data-postid="<?php echo $comment['gid']; ?>" data-belowelement="div-comment-<?php echo $comment['cid']; ?>" data-respondelement="respond" data-replyto="回复" aria-label="回复">回复</a>
                </div>
            </div>
        </li>
    <?php endforeach; ?>
    </ul>
<?php } ?>
<?php
//blog：发表评论表单
function blog_comments_post($logid, $ckname, $ckmail, $ckurl, $verifyCode, $allow_remark) {
    if ($allow_remark == 'y'): ?>
            <div id="respond" class="comment-respond">
                <h3 id="reply-title" class="comment-reply-title">发表评论
                    <small>
                        <a rel="nofollow" id="cancel-comment-reply-link" href="javascript:void(0);" style="display:none;">取消回复</a>
                    </small>
                </h3>
                <form action="<?php echo BLOG_URL; ?>index.php?action=addcom" method="post" id="commentform" class="comment-form">
                    <?php if (ROLE == ROLE_VISITOR): ?>
                        <p class="comment-notes">
                            <span id="email-notes">您的电子邮箱地址不会被公开。</span>必填项已用
                            <span class="required">*</span>标注</p>
                        <p class="comment-form-author">
                            <label for="author">显示名称
                                <span class="required">*</span>
                            </label>
                            <input name="comname" type="text" value="<?php echo $ckname; ?>" size="30" maxlength="245" required="required">
                        </p>
                        <p class="comment-form-email">
                            <label for="email">电子邮箱地址
                                <span class="required">*</span>
                            </label>
                            <input name="commail" type="text" value="<?php echo $ckmail; ?>" size="30" maxlength="100" aria-describedby="email-notes" required="required">
                        </p>
                        <p class="comment-form-url">
                            <label for="url">网站地址</label>
                            <input id="url" name="comurl" type="text" value="<?php echo $ckurl; ?>" size="30" maxlength="200">
                        </p>
                    <?php endif; ?>
                    <p class="comment-form-comment">
                        <label for="comment">评论</label>
                        <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                    </p>
                    <p class="form-submit">
                        <input name="submit" type="submit" id="submit" class="submit" value="发表评论">
                        <input type="hidden" name="gid" value="<?php echo $logid; ?>" id="gid">
                        <input type="hidden" name="pid" id="comment_parent" value="0">


                    </p>
                </form>
            </div>
    <?php endif; ?>
<?php } ?>
<?php
//blog：相邻文章
function neighbor_log($neighborLog) {
    extract($neighborLog); ?>
    <?php if ($prevLog): ?>
        <div class="alignleft">
            <a href="<?php echo Url::log($prevLog['gid']) ?>" rel="prev"><?php echo $prevLog['title']; ?></a>
        </div>
    <?php endif; ?>
    <?php if ($nextLog): ?>
        <div class="alignright">
            <a href="<?php echo Url::log($nextLog['gid']) ?>" rel="next"><?php echo $nextLog['title']; ?></a>
        </div>
    <?php endif; ?>
<?php } ?>
<?php
//blog：文章标签
function blog_tag($blogid) {
    global $CACHE;
    $tag_model = new Tag_Model();

    $log_cache_tags = $CACHE->readCache('logtags');
    if (!empty($log_cache_tags[$blogid])) {
        $tag = '';
        foreach ($log_cache_tags[$blogid] as $value) {
            $tag .= '<li><a href="'. Url::tag($value['tagurl']) .'" rel="tag">'. $value['tagname'] .'</a></li>';
        }
        echo $tag;
    } else {
        $tag_ids = $tag_model->getTagIdsFromBlogId($blogid);
        $tag_names = $tag_model->getNamesFromIds($tag_ids);

        if (!empty($tag_names)) {
            $tag = '标签:';

            foreach ($tag_names as $key => $value) {
                $tag .= '<li><a href="'. Url::tag(rawurlencode($value)) .'" rel="tag">'. htmlspecialchars($value) .'</a></li>';
            }

            echo $tag;
        }
    }
}

?>
<?php
function trimall($str)//删除空格
{$qian=array(" ","　","&nbsp;","\t","\n","\r");$hou=array("","","","","");
    return str_replace($qian,$hou,$str);
}?>
<?php

//blog：导航
function blog_navi() {
    global $CACHE;
    $navi_cache = $CACHE->readCache('navi');
    $dp_id = 0;
    foreach ($navi_cache as $value):
        if ($value['pid'] != 0) {
            continue;
        }
        $newtab = $value['newtab'] == 'y' ? 'target="_blank"' : ''; //新窗口打开
        $value['url'] = $value['isdefault'] == 'y' ? BLOG_URL . $value['url'] : trim($value['url'], '/');
        $current_tab = BLOG_URL . trim(Dispatcher::setPath(), '/') == $value['url'] ? 'current-menu-parent' : ''; //导航高亮
        ?>
        <?php if (!empty($value['children']) || !empty($value['childnavi'])) : ?>
        <li class="navbar-item <?php echo $current_tab;?>">
            <?php if (!empty($value['children'])): ?>
                <a href="<?php echo $value['url']; ?>" <?php echo $newtab; ?>><?php echo $value['naviname']; ?> </a>
                <ul class="sub-nav">
                    <?php foreach ($value['children'] as $row) {
                        echo '<li class="navbar-item"><a href="' . Url::sort($row['sid']) . '">' . $row['sortname'] . '</a></li>';
                    } ?>
                </ul>
            <?php endif; ?>
            <?php if (!empty($value['childnavi'])) : ?>
                <a href="<?php echo $value['url']; ?>" <?php echo $newtab; ?>><?php echo $value['naviname']; ?></a>
                <ul class="sub-nav">
                    <?php foreach ($value['childnavi'] as $row) {
                        $newtab = $row['newtab'] == 'y' ? 'target="_blank"' : '';
                        echo '<li class="navbar-item"><a href="' . $row['url'] . "\" $newtab >" . $row['naviname'] . '</a></li>';
                    } ?>
                </ul>
            <?php endif; ?>
        </li>
    <?php else: ?>
        <li class="menu-item <?php echo $current_tab;?>">
            <a href="<?php echo $value['url']; ?>" aria-current="page"><?php echo $value['naviname']; ?></a>
        </li>
    <?php endif; ?>
    <?php endforeach; ?>
<?php } ?>

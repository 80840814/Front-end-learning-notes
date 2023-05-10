<?php
/**
 * 首页模板
 */
if (!defined('EMLOG_ROOT')) {
	exit('error!');
}
?>
<!-- Post List -->
<section class="posts main-load">
    <div class="container">
        <div class="post-list">
            <?php
            doAction('index_loglist_top');
            if (!empty($logs)):
            foreach ($logs as $value):
            ?>
            <article class="meta">
                <header>
                    <a href="<?php echo $value['log_url']; ?>" itemprop="url">
                        <h2 itemprop="name headline"><?php echo $value['log_title']; ?></h2>
                    </a>
                </header>
                <main>
                    <p itemprop="articleBody"><?php echo mb_substr(trimall($value['content']),0,100,'utf-8');?>...</p>
                </main>
                <footer>
              <span class="time">
                <time datetime="<?php echo date('Y-m-d H:i', $value['date']); ?>" title="<?php echo date('Y-m-d H:i', $value['date']); ?>" itemprop="datePublished" pubdate><?php echo date('Y-m-d H:i', $value['date']); ?></time>发布</span>
                    <span class="hr">
              </span>
                    <span class="comments"><?php echo $value['comnum']; ?> 条评论</span>
                    <span class="hr">
              </span>
                    <span class="likes"><?php echo $value['views']; ?> 人浏览</span>
                </footer>
            </article>
            <?php
            endforeach;
            else:
                ?>
                <article class="meta">
                    <h3 style="font-size: 3em;margin: 0 0 20px;">Sorry!</h3>
                    <p>这个页面没有你要找的内容。</p>
                </article>
                <nav class="reade_more">
                </nav>
            <?php endif; ?>
            <?php if ($page_url) {?>
            <nav class="reade_more">
                <?php echo $page_url; ?>
            </nav>
            <?php }?>
        </div>
    </div>
</section>
<?php include View::getView('footer'); ?>

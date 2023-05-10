<?php
/**
 * 文章归档
 */
if (!defined('EMLOG_ROOT')) {
    exit('error!');
}
?>
<section class="container">
    <article class="post_article archives" itemscope itemtype="https://schema.org/Article">
        <?php
        function displayRecord(){
            global $CACHE;
            $record_cache = $CACHE->readCache('record');
            $output = '';
            foreach($record_cache as $value){
                $output .= '<h3>2020</h3><table>'.displayRecordItem($value['date']);
            }
            return $output;
        }
        function displayRecordItem($record){
            if (preg_match("/^([\d]{4})([\d]{2})$/", $record, $match)) {
                $days = getMonthDayNum($match[2], $match[1]);
                $record_stime = Strtotime($record . '01');
                $record_etime = $record_stime + 3600 * 24 * $days;
            } else {
                $record_stime = Strtotime($record);
                $record_etime = $record_stime + 3600 * 24;
            }
            $sql = "and date>=$record_stime and date<$record_etime order by top desc ,date desc";
            $result = archiver_db($sql);
            return $result;
        }
        function archiver_db($condition = ''){
            $DB = Database::getInstance();
            $sql = "SELECT gid, title, date,views FROM " . DB_PREFIX . "blog WHERE type='blog' and hide='n' $condition";
            $result = $DB->query($sql);

            while ($row = $DB->fetch_array($result)) {
                $log_url = Url::log($row['gid']);
                $output .= '<tr><td width="80" style="text-align:right;">'.date('n月d日',$row['date']).'</td><td><a href="'.$log_url.'">'.$row['title'].'</a></td></tr>' ;
            }
            $output .= '</table>';
            $output = empty($output) ? '<td><tr>暂无文章</td></tr>' :$output;
            return $output;
        }
        echo displayRecord();
        ?>
</section>
<?php include View::getView('footer'); ?>
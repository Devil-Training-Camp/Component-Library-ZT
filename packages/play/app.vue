<template>
  <div>启动测试</div>
  <div>
    <Button type="primary">主要按钮</Button>
    <Icon>*</Icon>
    <VisualScrollList style="height: 300px;border: gold solid 1px" :listData="dataList">
      <template v-slot="{ record }">
        <div class="row_content" @click="handleClick(record)">
          <p>{{ record.id }} : {{ record.title }}</p>
          <article>{{ record.description }}</article>
        </div>
      </template>
    </VisualScrollList>
  </div>
</template>
<script lang="ts" setup>
import { Icon,Button ,VisualScrollList} from '@easyest/components';
import Mock from 'mockjs'
let data = []
for (let i = 0; i < 500; i++) {
  data.push({ id: i, value: i })
}
let { dataList } = Mock.mock({
  'dataList|500': [
    {
      'id|+1': 1,
      title: '@ctitle',
      description: '@cparagraph(2,15)'
    }
  ]
})


const handleClick = (record) => {
  const msg = `点击了第 ${record.ids} 条数据,标题为：《${record.title}》`
  console.log(msg)
}
</script>

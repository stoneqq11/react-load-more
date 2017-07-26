<h2>INSTALL</h2>
	npm install @dreamland/react-load-more --save

<h2>USEAGE</h2>
	import Loading from '@dreamland/react-load-more'

	<LoadMore
		action={this.loadData}
		end={listData.end}
		loading={listData.loading}>
	{listData.list.map(data => <div key={data.id}>{data.content}</div>)}
	</LoadMore>

<h2>PARAMS</h2>
<code>
    @param action {!fn}，点击加载需要执行的动作
</code>
<br/>
<code>
    @param end {!boolean}，是否结束执行action
</code>
<br/>
<code>
    @param loading {!boolean}，是否正在执行action
</code>

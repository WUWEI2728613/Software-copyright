import {DataTest} from 'common/utils'
import {fetch} from 'common/utils/fetch'
import {projectPort} from 'common/port_url'

/**
 * [查询]
 * 1.根据id查询  params:{id:ID}
 * 2.分页查询 params:{page:PAGE,limit:LIMIT}  page:当前页，limit:每页显示条数
 * @param  {Object} params [参数]
 * @return 
 */
export  function get(params){
	let data = {
		code:0,
		data:[
		{
		type:1,//分类ID
		name:'热门产品',//分类名
		project:[//项目
			{
				id:1,
				name:'当面付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:2,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:3,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:4,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
						{
				id:5,
				name:'当面付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:6,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:7,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:8,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/PuHmzmRVqCnUadxreXjM.png',
				creatTime:'2017-90-12',
			}
		]
	},
	{
		type:2,//分类ID
		name:'行业接入',
		project:[
			{
				id:1,
				name:'当面付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:2,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:3,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:4,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
						{
				id:5,
				name:'当面付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:6,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:7,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/AuBmpwXHMHBVjXzjcmNs.png',
				creatTime:'2017-90-12',
			},
			{
				id:8,
				name:'App支付',
				router:'../index',
				desc:'描述正价his那厮女女女今祭祀繁华胜地黑色年是DVD淑女哦',
				img:'https://zos.alipayobjects.com/rmsportal/PuHmzmRVqCnUadxreXjM.png',
				creatTime:'2017-90-12',
			}
		]
	}
		],
		msg:'',
	}
	// return DataTest(data)
	return fetch(projectPort.get_type_projct_info_url,params,'GET')
}
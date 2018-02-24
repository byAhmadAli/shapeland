import draggable from 'vuedraggable';

const message = []
export default {
	name: 'create',
	components: {
		draggable,
	},
	data () {
		return {
			list: message.map( (name,index) => {return {name, order: index+1, fixed: false}; }),
			list2:[],
			editable:true,
			isDragging: false,
			delayedDragging:false
		}
	},
	methods:{
		orderList () {
			this.list = this.list.sort((one,two) =>{return one.order-two.order; })
		},
		onMove ({relatedContext, draggedContext}) {
			const relatedElement = relatedContext.element;
			const draggedElement = draggedContext.element;
			return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
		},
		add(value){

			message.push(value);
			this.list = message.map( (name,index) => {return {name, order: index+1, fixed: false}; })
		}
	},
	computed: {
		dragOptions () {
			return  {
				animation: 0,
				group: 'description',
				disabled: !this.editable,
				ghostClass: 'ghost'
			};
		},
		listString(){
			return JSON.stringify(this.list, null, 2);  
		},
		list2String(){
			return JSON.stringify(this.list2, null, 2);  
		}
	},
	watch: {
		isDragging (newValue) {
			if (newValue){
				this.delayedDragging= true
				return
			}
			this.$nextTick( () =>{
				this.delayedDragging =false
			})
		}
	}
}
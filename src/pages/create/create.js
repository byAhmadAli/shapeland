
import draggable from 'vuedraggable';

const cjs = createjs;
const message = []
const dir = {
	x: 0,
	y: 0
}
const colors =['red','blue','green']
var a = 0;
var stage;
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
	mounted() {
	    stage = new createjs.Stage('demoCanvas');
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
			if(a==2){
				a=0
			}else{
				a++
			}
			if(stage.children.length > 0){
				dir.x++
				dir.y++
			}
			if(stage.children.length >= 3){
				return
			}
			var shape = new cjs.Shape();
			shape.graphics.beginFill(colors[a]).drawRect(0, dir.x*60, 50, 50);
			
			stage.addChild(shape);
			stage.update();


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
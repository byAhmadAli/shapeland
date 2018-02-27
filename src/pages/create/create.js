import draggable from 'vuedraggable';
import Add from '@/components/add/add.vue'

const cjs = createjs;
const message = []
const dir = {
	x: 0,
	y: 0
}

var a = 2;
var stage;
export default {
	name: 'create',
	components: {
		draggable,
		Add
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
	    stage = new cjs.Stage('demoCanvas');

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

			if(value.shape == 'Rect'){
				shape.graphics.beginFill(value.color).drawRect(100, 0, 50, 50);
			}else if(value.shape == 'Circle'){
				shape.graphics.beginFill(value.color).drawCircle(100, 120, 30);
			}else if(value.shape == 'PolyStar'){
				shape.graphics.beginFill(value.color).drawPolyStar(100, 240, 50, 5, 0.6, -90);
			}

			stage.addChild(shape);
			stage.update();

			message.push(value);
			
			this.list = message.map( (item,index) => {return {name:item.name, color:item.color, shape:item.shape, order: index+1, fixed: false}; })
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
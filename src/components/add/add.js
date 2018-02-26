const cjs = createjs;
export default {
	mounted() {
	    

	},
	methods: {
		onClickButton () {
			debugger;
			let val = $('input[name="type"]').val()
			this.$emit('clicked', val)
		},
		onChangeShape(){
			let exStage = new cjs.Stage('example');
			let shapes = $('#shapes').val();
			let colors = $('#colors').val() ? $('#colors').val() : 'black';
			let shape = new cjs.Shape();
			if(shapes == 'Rect'){
				shape.graphics.beginFill(colors).drawRect(100, 75, 50, 50);
			}else if(shapes == 'Circle'){
				shape.graphics.beginFill(colors).drawCircle(100, 75, 50);
			}

			exStage.addChild(shape);
			exStage.update();
		}
	}
}
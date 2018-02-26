<template>
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Modal title</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-8">
							<canvas id="example" width="390px" height="150px"></canvas>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" name="type" />
							<select class="form-control" id="shapes" @change="onChangeShape()">
								<option>Select shape</option>
								<option value="Rect">Rect</option>
								<option value="Circle">Circle</option>
							</select>
							<select class="form-control" id="colors" @change="onChangeShape()">
								<option>Select color</option>
								<option value="red">red</option>
								<option value="green">green</option>
							</select>	
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary" v-on:click="onClickButton()">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./add.js"></script>
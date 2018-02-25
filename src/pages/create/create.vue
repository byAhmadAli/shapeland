<template>
	<div page-name="create">
		<div class="container">
			<div class="col-md-6">
				<canvas id="demoCanvas" width="600px" height="400px"></canvas>
			</div>
			<div  class="col-md-3">
				<draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false"> 
					<transition-group type="transition" :name="'flip-list'">
						<li class="list-group-item" v-for="element in list" :key="element.order"> 
							<i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
							{{element.name}}
							<span class="badge">{{element.order}}</span>
						</li> 
					</transition-group>
				</draggable>
			</div>

			<div  class="col-md-3">
				<draggable element="span" v-model="list2" :options="dragOptions" :move="onMove"> 
					<transition-group name="no" class="list-group" tag="ul">
						<li class="list-group-item" v-for="element in list2" :key="element.order"> 
							<i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
							{{element.name}}
							<span class="badge">{{element.order}}</span>
						</li> 
					</transition-group>
				</draggable>
			</div>


			<div  class="list-group col-md-3">
				<pre>{{listString}}</pre>
			</div>
		</div>
		<div class="container actions">
			<a class="add" v-on:click="add('all')" tooltip="Add SVG">
				<i class="fa fa-plus"></i>
			</a>
		</div>
	</div>
</template>

<script src="./create.js"></script>
<style lang="scss" scoped>
	[page-name = 'create']{
		
	}

	.ghost {
	  opacity: .5;
	  background: #C8EBFB;
	}
	.list-group {
	  min-height: 20px;
	}

	.list-group-item {
		cursor: move;
		i{
	  		cursor: pointer;
	  	}
	}
	.actions{
		position: fixed;
		bottom: 0;
		height: 56px;
		left: 0;
		right: 0;
		.add{
			position: absolute;
			bottom: 0;
			right: 0;
		    width: 56px;
		    height: 56px;
		    display: inline-block;
		    cursor: pointer;
		    border-radius: 50%;
		    background-color: #F44336;
		    text-align: center;
		    letter-spacing: .5px;
		    i{
				line-height: 56px;
				font-size: 1.6rem;
				width: inherit;
				display: inline-block;
				text-align: center;
				color: #fff;
		    }
		}	
	}
</style>
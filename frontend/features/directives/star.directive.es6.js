import angular from 'angular'
function starDetail($state, $parse) {
	return {
		restrict: 'E',
		scope: {
			selectPlanetOptions: '='
		},
		link: function (scope, element) {
			scope.sortType     = 'name'; 
			scope.sortReverse  = false;  
			scope.searchPlanet   = '';    
		},


		template: 
		`<div class="container">
			<form>
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-addon"><i class="fa fa-search"></i></div>
						<input type="text" class="form-control" placeholder="Search The Planets" ng-change ="checkPlanet()" ng-model="searchPlanet">
					</div>      
				</div>
			</form>
  
			<table class="table table-bordered table-striped">

				<thead>
					<tr>
						<td>
							<a href="#" ng-click="sortType = 'name'; sortReverse = !sortReverse">
								Name
								<span ng-show="sortType == 'name' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'name' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
						<td>
							<a href="#" ng-click="sortType = 'rotation_period'; sortReverse = !sortReverse">
								Rotation Period
								<span ng-show="sortType == 'rotation_period' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'rotation_period' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
						<td>
							<a href="#" ng-click="sortType = 'orbital_period'; sortReverse = !sortReverse">
								Orbital Period
								<span ng-show="sortType == 'orbital_period' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'orbital_period' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
						<td>
							<a href="#" ng-click="sortType = 'diameter'; sortReverse = !sortReverse">
								Diameter
								<span ng-show="sortType == 'diameter' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'diameter' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
						<td>
							<a href="#" ng-click="sortType = 'climate'; sortReverse = !sortReverse">
								Climate
								<span ng-show="sortType == 'climate' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'climate' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
						<td>
							<a href="#" ng-click="sortType = 'gravity'; sortReverse = !sortReverse">
								Gravity
								<span ng-show="sortType == 'gravity' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'gravity' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
						<td>
							<a href="#" ng-click="sortType = 'terrain'; sortReverse = !sortReverse">
								Terrain
								<span ng-show="sortType == 'terrain' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'terrain' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
						<td>
							<a href="#" ng-click="sortType = 'surface_water'; sortReverse = !sortReverse">
								Surface Water
								<span ng-show="sortType == 'surface_water' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'surface_water' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
						<td>
							<a href="#" ng-click="sortType = 'population'; sortReverse = !sortReverse">
								Population
								<span ng-show="sortType == 'population' && !sortReverse" class="fa fa-caret-down"></span>
								<span ng-show="sortType == 'population' && sortReverse" class="fa fa-caret-up"></span>
							</a>
						</td>
					</tr>
				</thead>

				<tbody>
					<tr ng-repeat="data in selectPlanetOptions | orderBy:sortType:sortReverse | filter:searchPlanet">
						<td>{{ data.name }}</td>
						<td>{{ data.rotation_period }}</td>
						<td>{{ data.orbital_period }}</td>
						<td>{{ data.diameter }}</td>
						<td>{{ data.climate }}</td>
						<td>{{ data.gravity }}</td>
						<td>{{ data.terrain }}</td>
						<td>{{ data.surface_water }}</td>
						<td>{{ data.population }}</td>
					</tr>
				</tbody>

			</table>
  
		</div>`

	}
}
 		
export default angular.module('directives.starDetail', [])
	.directive('starDetail', ['$state', '$parse', starDetail]);

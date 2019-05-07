function e() {
    var Grid = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.claculateDistanceFromOrigin = function (point) {
            var xDist = point.x - Grid.origin.x;
            var yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0);
    var grid2 = new Grid(5.0);
    console.log(grid1.claculateDistanceFromOrigin({ x: 3, y: 4 }));
    console.log(grid2.claculateDistanceFromOrigin({ x: 3, y: 4 }));
}
;
e();

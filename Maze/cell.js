function Cell(i, j)
{
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
    this.p = false;
    this.neighbours = [];

    this.getNeighbours = function()
    {
        if(this.neighbours.length === 0)
        {
            var top    = grid[index(i  , j-1)];
            var right  = grid[index(i+1, j  )];
            var bottom = grid[index(i  , j+1)];
            var left   = grid[index(i-1, j  )];

            if(top && !top.visited)
                this.neighbours.push(top);
            if(right && !right.visited)
                this.neighbours.push(right);
            if(bottom && !bottom.visited)
                this.neighbours.push(bottom);
            if(left && !left.visited)
                this.neighbours.push(left);
        }
        if(this.neighbours.length > 0)
        {
            
            i = 0;
            do
            {
                var r = floor(random(0, this.neighbours.length));
                if(!this.neighbours[r].visited)
                    return this.neighbours[r];
                i++;
            }
            while(i <= 4);
            
        }
            return undefined;    
    }
    this.highlight = function() {
    var x = this.i*w;
    var y = this.j*w;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);

  }

    this.show = function()
    {
        var x = this.i * w;
        var y = this.j * w;

        stroke(255);
        if(this.walls[0])
            line(x  , y  , x+w, y  ); // top wall
        if(this.walls[1])
            line(x+w, y  , x+w, y+w); // right wall
        if(this.walls[2])
            line(x+w, y+w, x  , y+w); // bottom wall
        if(this.walls[3])
            line(x  , y+w, x  , y  ); // left wall

        if(this.p)
        {
            noStroke();
            fill(255,69,0, 200);
            rect(x, y, w, w);
        }
        else if(this.visited)
        {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, w, w);
        }
    }

}
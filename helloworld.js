// Log "Hello World" to the console.
// Log four additional messages of your choosing. 
// Comment each message appropriately. 


        const canvas = document.getElementById('ballCanvas');
        const ctx = canvas.getContext('2d');

        const ball = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: 20,
            dx: 2,
            dy: 2,
            color: 'red'
        };

        function drawBall() {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = ball.color;
            ctx.fill();
            ctx.closePath();
        }

        function updateBallPosition() {
            ball.x += ball.dx;
            ball.y += ball.dy;

            // Bounce off the left and right edges
            if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
                ball.dx = -ball.dx;
            }

            // Bounce off the top and bottom edges
            if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
                ball.dy = -ball.dy;
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();
            updateBallPosition();
            requestAnimationFrame(animate);
        }

        animate();

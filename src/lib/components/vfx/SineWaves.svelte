<script>

    import { onMount } from 'svelte';

    onMount(() => {

        const canvas = document.querySelector('#sine-wave-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        const w = canvas.width;
        const h = canvas.height;
    
        const ctx = canvas.getContext('2d');
    
        const wave = {
            y: h/2,
            length: 0.014,
            amplitude: 140,
            f: 0.014,
            shift: 3
        }
    
        let increament = wave.f;
    
        function animate(){
    
            requestAnimationFrame(animate)
    
            ctx.fillStyle = `rgba(255, 255, 255, 0.01)`
            ctx.fillRect(0,0,w,h)
    
            ctx.beginPath()
    
            ctx.moveTo(0, h/2);
    
            for (let i = 0; i < w; i++){
    
                let shift;
    
                switch(wave.shift){
                    case 0: shift = 1; break;
                    case 1: shift = 1/Math.sin(i * wave.length); break;
                    case 2: shift = 1/Math.cos(increament); break;
                    case 3: shift = 1/i * 100; break;
                    case 4: shift = Math.sin(increament); break;
                    case 5: shift = Math.exp(i*wave.length); break
                    case 6: shift = Math.tan(i*wave.length); break
                    case 7: shift = Math.cos(Math.sin(i*wave.length)); break
                    case 8: shift = Math.asin(Math.cos(i*wave.length*2)); break
                    case 9: shift = Math.sin(Math.cos(Math.sin(i*wave.length*10))); break
                    case 10: shift = i * wave.length * Math.tan(i*wave.length*10); break
    
                    
                    default: shift = 0;break;
                }
    
                if (i*wave.length*10 % (Math.PI/2) == 0)
                    continue
    
                ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increament) * wave.amplitude * shift)
            }
    
            increament += wave.f;
    
            ctx.lineWidth = 0.8

            const colors = ['#ff4d4d', '#cc66ff'];
            const gradient = ctx.createLinearGradient(0, 0, w, 0);

            colors.forEach((color, index) => {
                gradient.addColorStop(index / (colors.length - 1), color);
            });
            ctx.strokeStyle = gradient;
            ctx.stroke()
    
        }
    
        animate()

    });


</script>

<canvas id="sine-wave-canvas"></canvas>

<style>
    canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>
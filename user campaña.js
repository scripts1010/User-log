



<script>

    
window.addEventListener("load", function () {

    // Inicializamos var de pestaña
    let pest;

    setTimeout(function () {
        
        // Nombre usuario logueado en pestaña vista
        let nameUser = parent.parent.ArcherApp.globals['displayName'];
        // let nameUser = "Silva, Wendy"
        document.querySelector("#master_DefaultContent_rts_s11544_f32255c").innerHTML = nameUser;

        // Nombre usuario logueado en pestaña editar
        let nameUserEdit = nameUser
        document.querySelector("#master_DefaultContent_rts_s11544_f32255c").value = nameUserEdit;

        // usuario logueado final
        let log = nameUser


        function pestañas() {

            try {
        
                // usuario creador en pestaña editar
                let createLogEditar = document.querySelector("#master_DefaultContent_rts_s11544_f32253c > tbody > tr > td > div > label").textContent
                pest = createLogEditar;
                console.log("pestaña edit - creador edit: " + pest)
        
            } catch (error) {
                // usuario creador en pestaña ver
                let createLogVista = document.querySelector("#master_DefaultContent_rts_s11544_f32253c > ul > li > div > a").textContent
                pest = createLogVista;
                console.log("pestaña vista - creador vista: " + pest)
            }

            // pest - usuario creador 
            agregarText(pest)
        
        }


        // Agrega 1 o 0 en campo usuario actual y comparando si el user logueado es igual al user creador 
        function agregarText(pestaña) {

            // Comparo si el usuario logueado es igual al usuario creador
            console.log(log)
            console.log(pestaña)
            if (log == pestaña) {
                
                // cuando son iguales

                try {  
                    // user actual de pestaña vista
                    document.querySelector("#master_DefaultContent_rts_s11544_f32254c").textContent = '1'
                } catch (error) {
                    console.log("No estamos en la pestaña vista")
                }
                try {
                    // user actual de pestaña edit
                    document.querySelector("#master_DefaultContent_rts_s11544_f32254c").value = '1'
                } catch (error) {
                    console.log("No estamos en la pestaña edit")
                }
                console.log("if  - " + pestaña + " - " +  log + " - ")
            }

            else {

                // cuando son distintos
                
                try {
                    // user actual de pestaña vista
                    document.querySelector("#master_DefaultContent_rts_s11544_f32254c").textContent = '0'
                } catch (error) {
                    console.log("No estamos en la pestaña vista")
                }
                try {
                    // user actual de pestaña edit
                    document.querySelector("#master_DefaultContent_rts_s11544_f32254c").value = '0'
                } catch (error) {
                    console.log("No estamos en la pestaña edit")
                }
                console.log("else  - " + pestaña + " - " +  log + " - ")
            }
        }

        pestañas()

    }, 1000);

}, false);

</script>
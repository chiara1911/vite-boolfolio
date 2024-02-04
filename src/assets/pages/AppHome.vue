<template>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-8 text-center mt-2">
                <h1>Questa sono io</h1>
                <span>Mi chiamo Chiara e ho deciso di puntare su me stessa. Sì, ho deciso di scommettere su di me! <br>
                    Come dicono i giudici di Masterchef, "ho messo io la firma sul grembiule! Sto puntando tutto su di te!"
                    <br>La vita mi ha messa a dura prova, mi ha messo davanti a
                    delle sfide che mai avrei immaginato. A volta pensavo di mollare e non nego che in alcuni momenti lo
                    sconforto
                    era il mio migliore amico. Ma non ho lasciato, ho fatto un respiro profondo, mi sono rimboccata le
                    maniche e
                    sono andata avanti. <br> Questo mi ha reso una persona forte, che non si lascia scoraggiare, che in
                    alcuni momenti basta non mollare!</span>
                    <div class="d-flex justify-content-around mt-4">
                        <p>email: <a href="mailto:chiaracesari89@gmail.com"> chiaracesari89@gmail.com</a></p>
                   <p>github: <a href="https://github.com/chiara1911"> ChiaraCesari GitHub</a></p>
                    </div>
                  
            </div>
            <div class="col-4" id="dev-image"></div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'AppHome',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
#dev-image {
    background-image: url(../../../image/dev-image.jpg);
    object-fit: cover;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

}
</style>
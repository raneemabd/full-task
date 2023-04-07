
<template>
  <section style="background-color: #fafafa">
    <v-container data-aos="zoom-in" data-aos-duration="1000">

      <v-parallax height="550" src="../../images/shopify.png"> </v-parallax>

      <div
        class="d-flex flex-column fill-height justify-center align-center py-6"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 class="font-weight-bold mb-4 text-primary" id="font" >
          {{ $t("message.welcome") }}
        </h1>
        <div>
          <h2 class=" subtitle-1 text-primary">
            <i>{{ $t("message.proud") }}</i>
          </h2>
        </div>
      </div>

    </v-container>
  </section>

  
    <section style="background-color: #b4cfa0e5">
    <v-container >
      <h1 class="font-weight-bold my-10 text-center pb-6 text-primary" data-aos="zoom-in" data-aos-duration="1000">
        What Are You Looking For ?
      </h1>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="mx-auto" max-width="344" data-aos="fade-right"       data-aos-easing="ease-in-sine"
     data-aos-duration="1000" >
            <v-img
              src="../../images/women.jpg"
              height="200px"
              cover
            ></v-img>
            <v-card-title class="text-white"> Women's Collection </v-card-title>
            <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
            <v-card-actions>
              <v-btn color="orange-lighten-2" to="/products/women"> Shop Now </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
            <v-expand-transition>
              <div>
                <v-divider></v-divider>
                <v-card-text class="text-white"
                  >Improving lives through clothes by suppoting families that need it most. Wear Good Be Good.
                  fashion clothes for women. dress clothes for women.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="mx-auto" max-width="344"  data-aos="fade-left"       data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
            <v-img src="../../images/men.jpg" height="200px" cover></v-img>
            <v-card-title class="text-white"> Men's Collection </v-card-title>
            <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text" to="/products/men"> Shop Now </v-btn>
            
              <v-spacer></v-spacer>
            </v-card-actions>
            <v-expand-transition>
              <div>
                <v-divider></v-divider>
                <v-card-text class="text-white">
                  Discover the latest trends in men's fashion and style with us.
                  For an amazing men's clothing store or men's clothing online.
                  Find the trendiest clothes for Men.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section class="py-10" style="background-color:  #FCFFE7;">
    <v-container >
      <h1 class="font-weight-bold my-10 text-center pb-6 text-primary" data-aos="zoom-in" data-aos-duration="1000">
        <b>Chek Out Our New Offers!</b>
        <div class="animation">
          <v-icon  color="#5f8d3e">
            mdi-chevron-double-down
          </v-icon>
        </div>
      </h1>
      <v-carousel hide-delimiters cycle id="carousel">
        

        <v-carousel-item
          src="../../images/offer1.jpg"
          cover class="scale"
         style="width: 100%;"
        ></v-carousel-item>



        <v-carousel-item
          src="../../images/offer2.jpg"
          cover class="scale"
        ></v-carousel-item>
        <v-carousel-item
          src="../../images/offer3.jpg"
          cover class="scale"
        ></v-carousel-item>


      </v-carousel>
    </v-container>
  </section>
  
  <footerSection/>
  
</template>

<style>
#font {
  font-family: "Brush Script MT", cursive;
  font-size: 60px;
}

.scale{
  animation: scale 6s infinite;
}
@keyframes scale {
  from{
    transform: scale(1);
  }
  to{
    transform: scale(1.4);
  }
}
.animation{
  animation: tran 1s ease-in-out alternate infinite ;
}
@keyframes tran{
    to{
        transform: translateY(20px);
    }
}
#carousel{
  width: 90%;
 margin: 0 auto;
  border-radius: 1%;
  box-shadow: 0px 10px 10px #80663f;
}
h1{
  font-family: "Brush Script MT", cursive;
  font-size: 36px;

}
</style>




<script setup >

import footerSection from '../components/footerSection.vue'


</script>






<template>
  <div>
      <b-container>
          <b-breadcrumb :items="breads"/>
      </b-container>
      <b-container>
        <h1 class="display-3" style="padding:0 1.5em">{{title}}</h1>
        <b-row align-h="end">
            <b-col>&nbsp;</b-col>
            <b-col cols="3" class="mb-3">
                <b-card>
                    <a href="http://" class="icon"><font-awesome-icon :icon="['fab','facebook']"></font-awesome-icon></a>
                    <a href="http://" class="icon"><font-awesome-icon :icon="['fab','twitter-square']"></font-awesome-icon></a>
                    <a href="http://" class="icon"><font-awesome-icon :icon="['fab','linkedin']"></font-awesome-icon></a>
                    <a href="http://" class="icon"><font-awesome-icon :icon="['fab','google-plus-square']"></font-awesome-icon></a>
                </b-card>
            </b-col>
        </b-row>
        <img :src="image" alt="Article Image" srcset="" class="mb-5">
        <p v-for="article of articles" :key="article.index" class="lead">{{article.paragraph}}</p>
      </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breads:
      [
        {
          text: 'Home',
          to: {name: 'Home'}
        },
        {
          text: 'Academic',
          to: {name: 'Academic'}
        },
        {
          text: 'Article Title'
        }
      ],
      title: 'Article Title',
      image: 'https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2018/03/Twitter-Bitcoin-Screenshot.jpg',
      articles: [
        {
          paragraph: 'Lorem ipsum dolor sit amet, nam an ullum errem, ne usu euripidis comprehensam. Vim ad veri percipit necessitatibus, verear phaedrum signiferumque ut his, epicuri detraxit expetenda at duo. Populo honestatis at eos. Vis quem nibh patrioque ei, cum verear assentior at.'
        },
        {
          paragraph: 'Eos te novum admodum, id reque percipitur est, vocibus dissentiunt ius et. Pri exerci melius epicurei et, ut vocent abhorreant theophrastus qui. Omnesque elaboraret vix no, ne animal tibique pro. Est mutat appetere voluptaria at.'
        },
        {
          paragraph: 'Sit falli tritani propriae ea. Vitae repudiandae ad est, usu te ceteros repudiare evertitur, ei eam nisl oratio ornatus. Eos postulant salutandi omittantur eu, mea unum graeco menandri te. Vix cu assum civibus. Hinc epicuri euripidis ne sit, pri eu salutatus adipiscing. Sea molestiae deseruisse no.'
        }
      ]
    }
  }
}
</script>

<style>
p{
    text-align: justify;
}
.icon{
    font-size: 2em;
    margin: .2em;
}
.card-body{
    padding: 0;
    text-align: center;
}
</style>

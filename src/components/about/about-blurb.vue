<script>
  export default {
    name: "AboutBlurb",
    data() {
      return {
        showMore: false,
      };
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore;
      },
    },
  };
</script>

<template>
  <div class="about-blurb-container">
    <div class="about-blurb-container_text">
      <h1 class="about-blurb-container_text-header">About Us</h1>
      <p class="about-blurb-container_text-blurb">
        Loss and grief are universal, however it often doesn’t feel that way.
        When I was 15 years old I lost my grandfather, and it felt as if the
        world around me was understanding, kind and caring. Teachers, coaches,
        family friends, and people I did not personally know gave me grace, and
        told me that I needed to feel my grief in order to continue living life.
        They held me when I needed to cry and offered support for the most
        mundane of tasks. This feeling of warmth, I believed to be universal,
        until I lost someone else when I was an “adult”.
      </p>
      <button
        @click="toggleShowMore"
        v-if="!showMore"
        class="about-blurb-container-buttons"
      >
        Learn More
      </button>
      <p v-if="showMore" class="about-blurb-container_text-blurb">
        At 23 years old my boyfriend's step father died and the world’s empathy
        and compassion I previously felt was gone. I was told somewhat often
        that, “yes death is awful but you're an adult now and need to keep
        going”. That I need to stop sitting in my grief, to hide those feelings
        and continue on with my life to get back to work within a day and just
        keep going”. This moment and those words changed me. I started to ask
        clients at work, what aspects of grief they think is the hardest? The
        answers ranged, but the common takeaway was that they left as if their
        grief was a burden to those around them. That they needed to deal with
        their grief alone. This stark contrast to how society responded to the
        grief of a 15 year old compared to an adult made me question why the age
        at which you grieve determines the level of community and society care?
        That question and those feelings have led me to create this website.
      </p>
      <button
        @click="toggleShowMore"
        v-if="showMore"
        class="about-blurb-container-buttons"
      >
        Read less
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-blurb-container {
    margin-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 96px;
    &_text {
      padding: 0px 96px;
      font-weight: bolder;
      &-blurb {
        display: flex;
        text-align: justify;
        font-size: 18px;
        padding: 0px 96px;
      }
    }
    &-buttons {
      background-color: black;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin: 16px;
      font-weight: bold;
    }
  }
</style>

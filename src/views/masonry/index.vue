<template>
    <div class="masonry">
        <div class="item">
            <img :src="require('@/assets/20140214120558_2f4NN.jpeg')" >
            <h2>title Goes here</h2>
            <p>We offer live interactive 1-to-1 and group online and live streaming class packages for children aged 4 to 15 regardless of where they are located. Children will learn Chinese, English, Coding and STEM topics online from qualified tutors from the United States, United Kingdom and China. Our unique learning approach in a social setting is loved by children and parents alike!</p>
        </div>
        <div class="item">
            <img :src="require('@/assets/20140214120558_2f4NN.jpeg')" >
            <h2>title Goes here</h2>
            <p>We offer live interactive 1-to-1 </p>
        </div>
        <div class="item">
            <img :src="require('@/assets/20140214120558_2f4NN.jpeg')" >
            <h2>title Goes here</h2>
            <p>We offer live interactive 1-to-1 and group online and live streaming class packages for children aged 4 to 15 regardless of where they are located. Children will learn Chinese, English, Coding and STEM topics online from qualified tutors from the United States, United Kingdom and China. Our unique learning approach in a social setting is loved by children and parents alike!</p>
        </div>
        <div class="item">
            <img :src="require('@/assets/20140214120558_2f4NN.jpeg')" >
            <h2>title Goes here</h2>
            <p>We offer live interactive 1-to-1 and group online and live streaming class packages for children aged 4 to 15 regardless of where they are located. Children will learn Chinese, English, Coding and STEM topics online from qualified tutors from the United States, United Kingdom and China. Our unique learning approach in a social setting is loved by children and parents alike!</p>
        </div>
        <div class="item">
            <img :src="require('@/assets/20140214120558_2f4NN.jpeg')" >
            <h2>title Goes here</h2>
            <p>We offer live interactive 1-to-1 and group online and live streaming class packages for children aged 4 to 15 regardless of where they are located. Children will learn Chinese, English, Coding and STEM topics online from qualified tutors from the United States, United Kingdom and China. Our unique learning approach in a social setting is loved by children and parents alike!</p>
        </div>
        <div class="item">
            <img :src="require('@/assets/20140214120558_2f4NN.jpeg')" >
            <h2>title Goes here</h2>
            <p>We offer live interactive 1-to-1 and group online and live streaming class packages for children aged 4 to 15 regardless of where they are located. Children will learn Chinese, English, Coding and STEM topics online from qualified tutors from the United States, United Kingdom and China. Our unique learning approach in a social setting is loved by children and parents alike!</p>
        </div>
        <div class="item">
            <img :src="require('@/assets/20140214120558_2f4NN.jpeg')" >
            <h2>title Goes here</h2>
            <p>We offer live interactive 1-to-1 and group online and live streaming class packages for children aged 4 to 15 regardless of where they are located. Children will learn Chinese, English, Coding and STEM topics online from qualified tutors from the United States, United Kingdom and China. Our unique learning approach in a social setting is loved by children and parents alike!</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .masonry {
        width: 1200px;
        margin: 20px auto;
        position: relative;
        columns: 3;
        column-gap: 30px;
    }
    .item {
        width: 100%;
        margin-bottom: 30px;
        border: 1px solid #333;
        break-inside: avoid;
        img {
            width: 100%;
        }
        h2 {
            padding: 8px 0;
        }
        p {
            color: #555;
        }
    }
</style>

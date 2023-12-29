<template>
    <v-app>
        <div class="comments-container">
            <ul id="comments-list" class="comments-list">
                <li>
                    <div class="comment-main-level d-flex">
                        <div class="comment-avatar"><img
                                src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                alt=""></div>

                        <div class="comment-box">
                            <div class="comment-head">
                                <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a>
                                </h6>

                                <span>27/12/2023</span>

                                <v-icon>mdi-reply-outline</v-icon>

                                <v-icon>mdi-heart-outline</v-icon>
                            </div>

                            <div class="comment-content">
                                <v-rating value="5" background-color="amber darken-3" color="amber darken-3"
                                    dense half-increments hover size="15"></v-rating>

                                <div class="ml-1">wow! giá tốt quá, 50$ mà chỉ còn 990k, trời ơi
                                    tin được không.</div>
                            </div>
                        </div>
                    </div>
                </li>

                <!--Reply-->
                <li class="mt-6 ml-7">
                    <div class="comment-main-level d-flex" style="padding: 10px 0px 0px 20px">
                        <div class="comment-avatar"><img
                                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                alt=""></div>

                        <div class="comment-box">
                            <div class="comment-head">
                                <h6 class="comment-name by-author mt-1"><a href="http://creaticode.com/blog">Admin</a></h6>

                                <v-chip label small text-color="white" color="success" class="font-weight-bold">QTV</v-chip>

                                <span class="ml-3 mt-1">27/12/2023</span>

                                <v-icon>mdi-reply-outline</v-icon>

                                <v-icon>mdi-heart-outline</v-icon>
                            </div>

                            <div class="comment-content">

                                <div class="ml-1 mt-2">Chào bạn,
                                    Các mặt hàng code, shop sẽ check kiểm tra trước khi
                                    gửi, nên khi nhập vào 100% là được. Nếu nhập vào
                                    không được thì thường là do khác hệ, lúc đó chỉ
                                    cần tạo account hệ khác là nhập được.
                                    Thông tin đến bạn.</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </v-app>
</template>

<style scoped>
a {
    color: #03658c;
    text-decoration: none;
}

ul {
    list-style-type: none;
}

.comments-container {
    margin: 10px auto 15px;
    width: 768px;
}

.comments-container h1 {
    font-size: 36px;
    color: #283035;
    font-weight: 400;
}

.comments-container h1 a {
    font-size: 18px;
    font-weight: 700;
}

.comments-list {
    margin-top: 30px;
    position: relative;
}

.reply-list:before,
.reply-list:after {
    display: none;
}

.comments-list .comment-avatar {
    width: 65px;
    height: 65px;
    position: relative;
    z-index: 99;
    float: left;
    border-radius: 8px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.comments-list .comment-avatar img {
    width: 100%;
    height: 100%;
}

.reply-list .comment-avatar {
    width: 50px;
    height: 50px;
}

.comment-main-level:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    clear: both;
}

.comments-list .comment-box {
    width: 600px;
    float: right;
    position: relative;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    margin-left: 20px;
    margin-top: 15px;
}

.comments-list .comment-box:before,
.comments-list .comment-box:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    display: block;
    border-width: 10px 12px 10px 0;
    border-style: solid;
    border-color: transparent #e7e7e7;
    top: 8px;
    left: -11px;
}

.comments-list .comment-box:before {
    border-width: 11px 13px 11px 0;
    border-color: transparent rgba(0, 0, 0, 0.05);
    left: -12px;
}

.comment-box .comment-head {
    background: #e7e7e7;
    padding: 10px 12px;
    border-bottom: 1px solid #E5E5E5;
    overflow: hidden;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
}

.comment-box .comment-head i {
    float: right;
    margin-left: 14px;
    position: relative;
    top: 2px;
    cursor: pointer;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
}

.comment-box .comment-head i:hover {
    color: #03658c;
}

.comment-box .comment-name {
    color: #283035;
    font-size: 14px;
    font-weight: 700;
    float: left;
    margin-right: 10px;
}

.comment-box .comment-name a {
    color: #283035;
}

.comment-box .comment-head span {
    float: left;
    color: #999;
    font-size: 13px;
    position: relative;
    top: 1px;
}

.comment-box .comment-content {
    background: #FFF;
    padding: 1px 12px 12px 12px;
    font-size: 15px;
    color: #595959;
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
    border-color: #f1f1f1;
}

@media only screen and (max-width: 766px) {
    .comments-container {
        width: 480px;
    }

    .comments-list .comment-box {
        width: 390px;
    }

    .reply-list .comment-box {
        width: 320px;
    }
}
</style>
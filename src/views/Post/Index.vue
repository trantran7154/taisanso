<template>
    <XyzTransition xyz="fade-100%">
        <div v-if="size.onsize >= 1111">
            <div class="post">
                <v-row>
                    <v-col cols="12" md="8" lg="8">
                        <div class="d-flex">
                            <v-row>
                                <v-col cols="12" md="1" lg="1">
                                    <v-avatar>
                                        <img
                                            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg">
                                    </v-avatar></v-col>
                                <v-col cols="12" md="11" lg="11">
                                    <div class="d-flex">
                                        <span class="blue--text">
                                            Nhatfreelancer</span>
                                        <span class="ml-2">@nhatfreelancer2</span>
                                        <v-btn class="ml-2" outlined small>Theo dõi</v-btn>
                                        <div class="ml-auto mt-1" style="font-size: 15px">Đã đăng vào thg 7 18, 2019 4:08 CH
                                            8 phút
                                            đọc</div>
                                    </div>

                                    <div class="d-flex">
                                        <div class="d-flex"><span><v-icon>mdi-star</v-icon></span><span
                                                class="mt-1 ml-1">5</span>
                                        </div>
                                        <div class="d-flex ml-3"><span><v-icon>mdi-account-plus</v-icon></span><span
                                                class="mt-1 ml-1">5</span>
                                        </div>
                                        <div class="d-flex ml-3"><span><v-icon>mdi-pencil</v-icon></span><span
                                                class="mt-1 ml-1">5</span>
                                        </div>

                                        <div class="d-flex ml-auto">
                                            <span><v-icon>mdi-eye-outline</v-icon></span><span class="mt-1 ml-1">5K</span>
                                            <span
                                                class="ml-3"><v-icon>mdi-comment-text-multiple-outline</v-icon></span><span
                                                class="mt-1 ml-1">5</span>
                                            <span class="ml-3"><v-icon>mdi-bookmark</v-icon></span><span
                                                class="mt-1 ml-1">5</span>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>

                        <h1 class="mt-5">API là gì? Tất tần tật về API</h1>

                        <div class="mt-5" ref="first1">
                            <h4>API là gì?</h4>
                            <p>API là viết tắt của Application Programming Interface (Giao diện lập trình ứng dụng), một
                                phần mềm
                                trung gian cho phép hai ứng dụng nói chuyện với nhau. Mỗi khi sử dụng một ứng dụng như
                                Facebook, gửi
                                tin nhắn tức thì hoặc kiểm tra thời tiết trên điện thoại, có nghĩa là bạn đang sử dụng API.
                            </p>
                        </div>
                        <div ref="first2">
                            <h4>Giải thích chi tiết</h4>
                            <p>Windows có nhiều API, và Twitter cũng có web API, tuy nhiên chúng thực hiện các chức năng
                                khác nhau,
                                với mục tiêu khác nhau. Nó chính là một phần mềm giao tiếp được sử dụng bởi các ứng dụng
                                khác nhau.
                                Nó cũng giống như bàn phím là thiết bị dùng để giao tiếp giữa người sử dụng và máy tính. API
                                là một
                                phần mềm giao tiếp giữa chương trình và hệ điều hành. Mỗi bộ API dành cho các hệ điều hành
                                khác nhau
                                là hoàn toàn khác nhau và không có sự tương thích với nhau. API dành cho các hệ điều hành
                                Windows và
                            </p>
                        </div>
                        <div ref="first3">
                            <h4>Những điểm nổi bật của API.</h4>
                            <p>Đây là một trong những framework mới sẽ giúp ít cho bạn trong việc xây dựng các HTTP service
                                một cách
                                rất đơn giản và nhanh chóng. Mã nguồn mở nên bạn có thể được sử dụng bởi bất kì một client
                                nào hỗ
                                trợ XML, JSON. Nó cũng có khả năng hỗ trợ đầy đủ các thành phần HTTP: URI, request/response
                                headers,
                                caching, versioning, content forma. Bạn có thể sử dụng các host nằm trong phần ứng dụng hoặc
                                trên
                                IIS. Một kiểu kiến trúc vô cùng phù hợp dành cho các thiết bị trang bị băng thông giới hạn
                                như
                                smartphone, tablet. Thường nó có định dạng dữ liệu là JSON, XML hoặc một kiểu dữ liệu bất
                                kỳ.</p>
                        </div>
                        <div ref="first4">
                            <h4>Ưu điểm</h4>
                            <p>Cấu hình đơn giản khi được so sánh với WCF Khả năng trình diễn cao Hỗ trợ chức năng RESTful
                                một cách
                                đầy đủ Hỗ trợ đầy đủ các thành phần MVC như: routing, controller, action result, filter,
                                model
                                binder, IoC container, dependency injection, unit test Mã nguồn mở.</p>
                        </div>
                        <div ref="first5">
                            <h4>Vậy API có phải một ngôn ngữ lập trình không?</h4>
                            <p>Câu trả lời là không. Các hàm API cũng như các hàm bình thường mà chúng ta hay viết và trên
                                từng ngôn
                                ngữ khác nhau cũng có các bộ API tương ứng khác nhau. Ví dụ: Google API có bộ cho .NET,
                                PHP,.. Và
                                mỗi bộ API hầu như đều có hướng dẫn sử dụng rất cụ thể và chi tiết. Cách tạo dự án MVC web
                                API Đầu
                                tiên bạn vào File/ New/ Project, sau đó chọn ASP.NET Web Application, rồi OK, chọn tiếp
                                template Web
                                API Tiếp theo để tạo cơ sở dữ liệu cho dự án bạn chọn chuột phải vào dự án Add New Item, SQL
                                Server
                                Database, sau đó lưu vào thư mục App_Data. Tạo những model, controller, view sau đó vào các
                                thư mục
                                Models, Controllers và Views.</p>
                        </div>
                        <div ref="first6">
                            <h4>Tầm quan trọng của API</h4>
                            <p>Khi một phần mềm gọi tới API, phần mềm gọi có thể cung cấp dữ liệu đầu vào và đòi hỏi dữ liệu
                                đầu ra
                                từ API hoặc không, nhưng trong mọi trường hợp, phần mềm gọi để có thể tiếp tục hoạt động thì
                                nó cần
                                phần mềm cung cấp phải thực hiện những gì đã cam kết qua API.</p>
                        </div>
                        <div ref="first7">
                            <h4>Hiểu hơn về API qua ví dụ về Facebook</h4>
                            <p>Bạn có thể sử dụng tài khoản Facebook của mình để đăng nhập vào rất nhiều trang web không do
                                Facebook
                                kiểm soát. Để người dùng của mình có thể sử dụng thông tin cá nhân Facebook trên các trang
                                này, điều
                                duy nhất mạng xã hội này cần làm là tạo ra một API đăng nhập tài khoản Facebook. Mỗi lần bạn
                                click
                                vào nút "Đăng nhập với Facebook" trên Instagram, WhatsApp hay Quora thì các trang web/ứng
                                dụng này
                                sẽ "gọi" tới API của Facebook. Công việc xác thực danh tính sẽ được Facebook thực hiện, các
                                trang
                                web và các ứng dụng không cần phải nhúng tay vào. Sau khi xác thực xong, Facebook sẽ "ném"
                                lại cho
                                các trang web và ứng dụng gọi tới API của mình trên một gói tin có nội dung đại loại như
                                "Đây là anh
                                Lê Hoàng, tài khoản Facebook là abcxyz" chẳng hạn. Nhờ có API mà Facebook có thể thực hiện
                                tính năng
                                xác thực hộ các dịch vụ khác.</p>
                        </div>

                        <div class="d-flex">
                            <v-chip class="ma-2" label>API</v-chip>
                            <v-chip class="ma-2" label>WebAPI</v-chip>
                            <v-chip class="ma-2" label>Restful API</v-chip>
                        </div>

                        <p class="ma-2 mt-3" style="font-size: 15px; color:#757575">All rights reserved</p>

                        <div class="float-right">
                            <v-icon>mdi-facebook</v-icon>
                            <v-icon class="ml-2">mdi-twitter</v-icon>
                        </div>
                    </v-col>

                    <!--Bình luận-->
                    <v-col cols="12" md="4" lg="4">
                        <div class="d-flex">
                            <h4>MỤC LỤC</h4>
                            <div class="mt-5 ml-3" style="width: 300px">
                                <v-divider></v-divider>
                            </div>
                        </div>
                        <v-tabs class="mt-3" vertical>
                            <v-tab @click="scrollTo('first1')" class="back--text">API là gì?</v-tab>
                            <v-tab @click="scrollTo('first2')" class="back--text">Giải thích chi tiết</v-tab>
                            <v-tab @click="scrollTo('first3')" class="back--text">Những điểm nổi bật của API.</v-tab>
                            <v-tab @click="scrollTo('first4')" class="back--text">Ưu điểm</v-tab>
                            <v-tab @click="scrollTo('first5')" class="back--text">Vậy API có phải một ngôn ngữ lập trình
                                không?</v-tab>
                            <v-tab @click="scrollTo('first6')" class="back--text">Tầm quan trọng của API</v-tab>
                            <v-tab @click="scrollTo('first7')" class="back--text">Hiểu hơn về API qua ví dụ về
                                Facebook</v-tab>
                        </v-tabs>
                    </v-col>
                </v-row>

                <!--Bài viết liên quan-->
                <div class="mt-3">
                    <h3>Bài viết liên quan</h3>
                    <v-carousel cycle height="250" hide-delimiter-background show-arrows-on-hover>
                        <v-carousel-item v-for="(item, i) in 5" :key="i">
                            <v-sheet height="100%">
                                <v-row class="fill-height" align="center" justify="center">
                                    <v-card v-for="(item, i) in 4" :key="i" class="ma-3" max-width="250" outlined>
                                        <v-list-item three-line>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-h5 mb-1">
                                                    Restful API là gì?
                                                </v-list-item-title>
                                                <div class="mt-2">
                                                    <span class="blue--text">Abc</span>
                                                    <p style="font-size: 15px; color: #757575">4 phút đọc</p>

                                                    <div class="d-flex" style="font-size: 15px;">
                                                        <span><v-icon size="18">mdi-eye-outline</v-icon></span><span
                                                            class="ml-1">5K</span>
                                                        <span class="ml-3"><v-icon
                                                                size="18">mdi-bookmark</v-icon></span><span
                                                            class="ml-1">5</span>
                                                        <span class="ml-3"><v-icon
                                                                size="18">mdi-comment-text-multiple-outline</v-icon></span><span
                                                            class="ml-1">5</span>
                                                        <span class="ml-2"><v-icon size="25"
                                                                style="margin-top: -4px;">mdi-menu-swap</v-icon></span><span>5</span>
                                                    </div>
                                                </div>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </div>

                <!--Bài viết khác-->
                <div>
                    <h3>Bài viết khác từ Nhatfreelancer</h3>
                    <div class="mt-9">
                        <v-row>
                            <v-card v-for="(item, i) in 4" :key="i" class="ma-3" max-width="250" outlined>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h5 mb-1">
                                            Websocket là gì? Hiểu rõ về Websocket
                                        </v-list-item-title>
                                        <div class="mt-2">
                                            <span class="blue--text">Nhatfreelancer</span>
                                            <p style="font-size: 15px; color: #757575">4 phút đọc</p>

                                            <div class="d-flex" style="font-size: 15px;">
                                                <span><v-icon size="18">mdi-eye-outline</v-icon></span><span
                                                    class="ml-1">5K</span>
                                                <span class="ml-3"><v-icon size="18">mdi-bookmark</v-icon></span><span
                                                    class="ml-1">5</span>
                                                <span class="ml-3"><v-icon
                                                        size="18">mdi-comment-text-multiple-outline</v-icon></span><span
                                                    class="ml-1">5</span>
                                                <span class="ml-2"><v-icon size="25"
                                                        style="margin-top: -4px;">mdi-menu-swap</v-icon></span><span>5</span>
                                            </div>
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-row>
                    </div>
                </div>

                <!--Bình luận-->
                <div class="mt-9">
                    <h3>Bình luận</h3>
                    <div class="mt-9 ml-3" v-if="user == false">
                        <v-row>
                            <v-card class="ma-3 mx-auto" height="50" width="100%" outlined>
                                <div class="text-center ma-2" style="color: #BDBDBD"><v-icon
                                        color="#BDBDBD">mdi-chat-outline</v-icon> Đăng nhập để bình luận</div>
                            </v-card>
                        </v-row>
                    </div>

                    <div class="mt-9 ml-3" v-if="user == true">
                        <v-col cols="12" md="12" lg="12">
                            <v-textarea outlined name="input-7-4" label="Nhập nội dung để bình luận..."
                                value=""></v-textarea>

                            <div class="d-flex">
                                <v-btn class="ml-auto" color="blue" outlined>Bình luận</v-btn>
                            </div>
                        </v-col>
                    </div>
                </div>

                <!--Bình luận-->
                <div class="mt-9">
                    <div class="mt-9 ml-3">
                        <v-row>
                            <v-card width="100%" outlined>
                                <div class="pa-5" v-for="(item, i) in 1" :key="i">
                                    <v-row>
                                        <v-card class="mt-5 ml-5 d-flex" flat>
                                            <v-avatar width="50" height="50">
                                                <img src="https://taphoammo.net/images/avatars/user.svg">
                                            </v-avatar>
                                            <div class="ml-3">
                                                <div class="d-flex">
                                                    <b class="green--text ml-2">abc</b>
                                                    <p class="mr-auto ml-2"
                                                        style="font-size: 15px; color: #757575; margin-top: 2px;">
                                                        @particular</p>
                                                </div>
                                                <p class="ml-2" style="font-size: 15px; color: #BDBDBD">thg 6 10,
                                                    2021
                                                    5:22 CH
                                                </p>
                                                <p class="ml-2" style="font-size: 15px; word-break: break-word !important;">
                                                    Ủa
                                                    nếu mà các bên họ dùng api của facebook cho thì
                                                    họ có
                                                    thể vẫn
                                                    lấy được tài khoàn và mật khẩu người dùng. Việc là họ sẽ dùng
                                                    api
                                                    xác thực ở
                                                    một nơi và facebook có kiểm tra thế nào thì dừ liệu nhập từ một
                                                    web
                                                    khác.
                                                </p>
                                            </div>
                                        </v-card>
                                        <v-divider></v-divider>
                                    </v-row>

                                    <div class="ml-5 mt-9" v-if="reply == true">
                                        <v-card class="mt-5 ml-5 d-flex" flat>
                                            <v-avatar width="50" height="50">
                                                <img src="https://taphoammo.net/images/avatars/user.svg">
                                            </v-avatar>
                                            <div class="ml-3">
                                                <div class="d-flex">
                                                    <b class="green--text ml-2">Hoang Vu</b>
                                                    <p class="mr-auto ml-2"
                                                        style="font-size: 15px; color: #757575; margin-top: 2px;">
                                                        @hoangvh185</p>
                                                </div>
                                                <p class="ml-2" style="font-size: 15px; color: #BDBDBD">thg 6 10,
                                                    2021
                                                    5:22 CH
                                                </p>
                                                <p class="ml-2" style="font-size: 15px; word-break: break-word !important;">
                                                    việc
                                                    xác thực là của fb mà bạn thì các web ứng dụng
                                                    làm sao
                                                    biết được tài khoản mật khẩu của user chứ.Thứ mà fb trả lại cho
                                                    web ứng
                                                    dụng chỉ là những thông tin như tên , avatar,...Hay nói cách
                                                    khác fb cho
                                                    gì thì mình dùng đấy chứ không phải mình muốn lấy gì cũng được.
                                                </p>
                                            </div>
                                        </v-card>
                                    </div>
                                </div>
                            </v-card>
                        </v-row>
                    </div>
                </div>
            </div>
        </div>

        <!--Responsive-->
        <div v-if="size.onsize < 1111">
            <div class="post-res">
                <v-row>
                    <v-col cols="12" md="12" lg="12">
                        <div class="d-flex">
                            <v-avatar width="80" height="80">
                                <img src="https://taphoammo.net/images/avatars/user.svg">
                            </v-avatar>

                            <b class="blue--text ml-4 mt-8">Nhatfreelancer</b>
                        </div>

                        <div class="d-flex" style="margin-left: 95px; margin-top: -18px">
                            <small>@nhatfreelancer2</small>
                            <v-btn class="ml-2" outlined x-small>Theo dõi</v-btn>
                        </div>

                        <div class="d-flex">
                            <div class="ml-auto mt-1" style="font-size: 15px">Đã đăng vào thg 7 18, 2019 4:08 CH
                                8 phút
                                đọc</div>
                        </div>

                        <div class="d-flex mt-5" style="font-size: 14px;">
                            <div class="d-flex"><span><v-icon size="20">mdi-star</v-icon></span><span class="ml-1">5</span>
                            </div>
                            <div class="d-flex ml-3"><span><v-icon size="20">mdi-account-plus</v-icon></span><span
                                    class="ml-1">5</span>
                            </div>
                            <div class="d-flex ml-3"><span><v-icon size="20">mdi-pencil</v-icon></span><span
                                    class="ml-1">5</span>
                            </div>

                            <div class="d-flex ml-auto">
                                <span><v-icon size="20">mdi-eye-outline</v-icon></span><span class="ml-1">5K</span>
                                <span class="ml-3"><v-icon size="20">mdi-comment-text-multiple-outline</v-icon></span><span
                                    class="ml-1">5</span>
                                <span class="ml-3"><v-icon size="20">mdi-bookmark</v-icon></span><span class="ml-1">5</span>
                            </div>
                        </div>

                        <h2 class="mt-5">API là gì? Tất tần tật về API</h2>

                        <div class="mt-4" ref="first1">
                            <h4>API là gì?</h4>
                            <p>API là viết tắt của Application Programming Interface (Giao diện lập trình ứng dụng), một
                                phần mềm
                                trung gian cho phép hai ứng dụng nói chuyện với nhau. Mỗi khi sử dụng một ứng dụng như
                                Facebook, gửi
                                tin nhắn tức thì hoặc kiểm tra thời tiết trên điện thoại, có nghĩa là bạn đang sử dụng API.
                            </p>
                        </div>
                        <div ref="first2">
                            <h4>Giải thích chi tiết</h4>
                            <p>Windows có nhiều API, và Twitter cũng có web API, tuy nhiên chúng thực hiện các chức năng
                                khác nhau,
                                với mục tiêu khác nhau. Nó chính là một phần mềm giao tiếp được sử dụng bởi các ứng dụng
                                khác nhau.
                                Nó cũng giống như bàn phím là thiết bị dùng để giao tiếp giữa người sử dụng và máy tính. API
                                là một
                                phần mềm giao tiếp giữa chương trình và hệ điều hành. Mỗi bộ API dành cho các hệ điều hành
                                khác nhau
                                là hoàn toàn khác nhau và không có sự tương thích với nhau. API dành cho các hệ điều hành
                                Windows và
                            </p>
                        </div>
                        <div ref="first3">
                            <h4>Những điểm nổi bật của API.</h4>
                            <p>Đây là một trong những framework mới sẽ giúp ít cho bạn trong việc xây dựng các HTTP service
                                một cách
                                rất đơn giản và nhanh chóng. Mã nguồn mở nên bạn có thể được sử dụng bởi bất kì một client
                                nào hỗ
                                trợ XML, JSON. Nó cũng có khả năng hỗ trợ đầy đủ các thành phần HTTP: URI, request/response
                                headers,
                                caching, versioning, content forma. Bạn có thể sử dụng các host nằm trong phần ứng dụng hoặc
                                trên
                                IIS. Một kiểu kiến trúc vô cùng phù hợp dành cho các thiết bị trang bị băng thông giới hạn
                                như
                                smartphone, tablet. Thường nó có định dạng dữ liệu là JSON, XML hoặc một kiểu dữ liệu bất
                                kỳ.</p>
                        </div>
                        <div ref="first4">
                            <h4>Ưu điểm</h4>
                            <p>Cấu hình đơn giản khi được so sánh với WCF Khả năng trình diễn cao Hỗ trợ chức năng RESTful
                                một cách
                                đầy đủ Hỗ trợ đầy đủ các thành phần MVC như: routing, controller, action result, filter,
                                model
                                binder, IoC container, dependency injection, unit test Mã nguồn mở.</p>
                        </div>
                        <div ref="first5">
                            <h4>Vậy API có phải một ngôn ngữ lập trình không?</h4>
                            <p>Câu trả lời là không. Các hàm API cũng như các hàm bình thường mà chúng ta hay viết và trên
                                từng ngôn
                                ngữ khác nhau cũng có các bộ API tương ứng khác nhau. Ví dụ: Google API có bộ cho .NET,
                                PHP,.. Và
                                mỗi bộ API hầu như đều có hướng dẫn sử dụng rất cụ thể và chi tiết. Cách tạo dự án MVC web
                                API Đầu
                                tiên bạn vào File/ New/ Project, sau đó chọn ASP.NET Web Application, rồi OK, chọn tiếp
                                template Web
                                API Tiếp theo để tạo cơ sở dữ liệu cho dự án bạn chọn chuột phải vào dự án Add New Item, SQL
                                Server
                                Database, sau đó lưu vào thư mục App_Data. Tạo những model, controller, view sau đó vào các
                                thư mục
                                Models, Controllers và Views.</p>
                        </div>
                        <div ref="first6">
                            <h4>Tầm quan trọng của API</h4>
                            <p>Khi một phần mềm gọi tới API, phần mềm gọi có thể cung cấp dữ liệu đầu vào và đòi hỏi dữ liệu
                                đầu ra
                                từ API hoặc không, nhưng trong mọi trường hợp, phần mềm gọi để có thể tiếp tục hoạt động thì
                                nó cần
                                phần mềm cung cấp phải thực hiện những gì đã cam kết qua API.</p>
                        </div>
                        <div ref="first7">
                            <h4>Hiểu hơn về API qua ví dụ về Facebook</h4>
                            <p>Bạn có thể sử dụng tài khoản Facebook của mình để đăng nhập vào rất nhiều trang web không do
                                Facebook
                                kiểm soát. Để người dùng của mình có thể sử dụng thông tin cá nhân Facebook trên các trang
                                này, điều
                                duy nhất mạng xã hội này cần làm là tạo ra một API đăng nhập tài khoản Facebook. Mỗi lần bạn
                                click
                                vào nút "Đăng nhập với Facebook" trên Instagram, WhatsApp hay Quora thì các trang web/ứng
                                dụng này
                                sẽ "gọi" tới API của Facebook. Công việc xác thực danh tính sẽ được Facebook thực hiện, các
                                trang
                                web và các ứng dụng không cần phải nhúng tay vào. Sau khi xác thực xong, Facebook sẽ "ném"
                                lại cho
                                các trang web và ứng dụng gọi tới API của mình trên một gói tin có nội dung đại loại như
                                "Đây là anh
                                Lê Hoàng, tài khoản Facebook là abcxyz" chẳng hạn. Nhờ có API mà Facebook có thể thực hiện
                                tính năng
                                xác thực hộ các dịch vụ khác.</p>
                        </div>

                        <div class="d-flex">
                            <v-chip class="ma-2" label>API</v-chip>
                            <v-chip class="ma-2" label>WebAPI</v-chip>
                            <v-chip class="ma-2" label>Restful API</v-chip>
                        </div>

                        <p class="ma-2 mt-3" style="font-size: 15px; color:#757575">All rights reserved</p>

                        <div class="d-flex">
                            <div class="ml-auto">
                                <v-icon>mdi-facebook</v-icon>
                                <v-icon class="ml-2">mdi-twitter</v-icon>
                            </div>
                        </div>

                        <!--Mục lục-->
                        <v-col cols="12" md="4" lg="4">
                            <div class="d-flex mt-5">
                                <h4>MỤC LỤC</h4>
                                <div class="mt-5 ml-3" style="width: 200px">
                                    <v-divider></v-divider>
                                </div>
                            </div>
                            <v-tabs class="mt-3" vertical>
                                <v-tab @click="scrollTo('first1')" class="back--text">API là gì?</v-tab>
                                <v-tab @click="scrollTo('first2')" class="back--text">Giải thích chi tiết</v-tab>
                                <v-tab @click="scrollTo('first3')" class="back--text">Những điểm nổi bật của API.</v-tab>
                                <v-tab @click="scrollTo('first4')" class="back--text">Ưu điểm</v-tab>
                                <v-tab @click="scrollTo('first5')" class="back--text">Vậy API có phải một ngôn ngữ lập trình
                                    không?</v-tab>
                                <v-tab @click="scrollTo('first6')" class="back--text">Tầm quan trọng của API</v-tab>
                                <v-tab @click="scrollTo('first7')" class="back--text">Hiểu hơn về API qua ví dụ về
                                    Facebook</v-tab>
                            </v-tabs>
                        </v-col>

                        <!--Bài viết liên quan-->
                        <div class="mt-1">
                            <h3>Bài viết liên quan</h3>
                            <v-carousel class="mt-5" cycle height="160" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(item, i) in 5" :key="i">
                                    <v-sheet height="100%">
                                        <v-row class="fill-height" align="center" justify="center">
                                            <v-card v-for="(item, i) in 4" :key="i" class="ma-3" max-width="250" outlined>
                                                <v-list-item three-line>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="text-h5 mb-1">
                                                            Restful API là gì?
                                                        </v-list-item-title>
                                                        <div class="mt-2">
                                                            <span class="blue--text">Abc</span>
                                                            <p style="font-size: 15px; color: #757575">4 phút đọc</p>

                                                            <div class="d-flex" style="font-size: 15px;">
                                                                <span><v-icon size="18">mdi-eye-outline</v-icon></span><span
                                                                    class="ml-1">5K</span>
                                                                <span class="ml-3"><v-icon
                                                                        size="18">mdi-bookmark</v-icon></span><span
                                                                    class="ml-1">5</span>
                                                                <span class="ml-3"><v-icon
                                                                        size="18">mdi-comment-text-multiple-outline</v-icon></span><span
                                                                    class="ml-1">5</span>
                                                                <span class="ml-2"><v-icon size="25"
                                                                        style="margin-top: -4px;">mdi-menu-swap</v-icon></span><span>5</span>
                                                            </div>
                                                        </div>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-card>
                                        </v-row>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </div>

                        <!--Bài viết khác-->
                        <div class="mt-3">
                            <h3>Bài viết khác từ Nhatfreelancer</h3>
                            <div class="mt-7">
                                <v-row>
                                    <v-col cols="4" md="4" lg="4" v-for="(item, i) in 4" :key="i">
                                        <v-card max-width="250" outlined>
                                            <v-list-item three-line>
                                                <v-list-item-content>
                                                    <v-list-item-title class="text-h5 mb-1">
                                                        Websocket là gì? Hiểu rõ về Websocket
                                                    </v-list-item-title>
                                                    <div class="mt-2">
                                                        <span class="blue--text">Nhatfreelancer</span>
                                                        <p style="font-size: 15px; color: #757575">4 phút đọc</p>

                                                        <div class="d-flex" style="font-size: 15px;">
                                                            <span><v-icon size="18">mdi-eye-outline</v-icon></span><span
                                                                class="ml-1">5K</span>
                                                            <span class="ml-3"><v-icon
                                                                    size="18">mdi-bookmark</v-icon></span><span
                                                                class="ml-1">5</span>
                                                            <span class="ml-3"><v-icon
                                                                    size="18">mdi-comment-text-multiple-outline</v-icon></span><span
                                                                class="ml-1">5</span>
                                                            <span class="ml-2"><v-icon size="25"
                                                                    style="margin-top: -4px;">mdi-menu-swap</v-icon></span><span>5</span>
                                                        </div>
                                                    </div>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>

                        <!--Bình luận-->
                        <div class="mt-9">
                            <h3>Bình luận</h3>
                            <div class="mt-9 ml-3" v-if="user == false">
                                <v-row>
                                    <v-card class="ma-3 mx-auto" height="50" width="100%" outlined>
                                        <div class="text-center ma-2" style="color: #BDBDBD"><v-icon
                                                color="#BDBDBD">mdi-chat-outline</v-icon> Đăng nhập để bình luận</div>
                                    </v-card>
                                </v-row>
                            </div>

                            <div class="mt-9 ml-3" v-if="user == true">
                                <v-col cols="12" md="12" lg="12">
                                    <v-textarea outlined name="input-7-4" label="Nhập nội dung để bình luận..."
                                        value=""></v-textarea>

                                    <div class="d-flex">
                                        <v-btn class="ml-auto" color="blue" outlined>Bình luận</v-btn>
                                    </div>
                                </v-col>
                            </div>
                        </div>

                        <!--Bình luận-->
                        <div class="mt-9">
                            <div class="mt-9 ml-3">
                                <v-row>
                                    <v-card width="100%" outlined>
                                        <div class="pa-5" v-for="(item, i) in 1" :key="i">
                                            <v-row>
                                                <v-card class="mt-5 ml-5 d-flex" flat>
                                                    <v-avatar width="50" height="50">
                                                        <img src="https://taphoammo.net/images/avatars/user.svg">
                                                    </v-avatar>
                                                    <div class="ml-3">
                                                        <div class="d-flex">
                                                            <b class="green--text ml-2">abc</b>
                                                            <p class="mr-auto ml-2"
                                                                style="font-size: 15px; color: #757575; margin-top: 2px;">
                                                                @particular</p>
                                                        </div>
                                                        <p class="ml-2" style="font-size: 15px; color: #BDBDBD">thg 6 10,
                                                            2021
                                                            5:22 CH
                                                        </p>
                                                        <p class="ml-2"
                                                            style="font-size: 14px; word-break: break-word !important;">Ủa
                                                            nếu mà các bên họ dùng api của facebook cho thì
                                                            họ có
                                                            thể vẫn
                                                            lấy được tài khoàn và mật khẩu người dùng. Việc là họ sẽ dùng
                                                            api
                                                            xác thực ở
                                                            một nơi và facebook có kiểm tra thế nào thì dừ liệu nhập từ một
                                                            web
                                                            khác.
                                                        </p>
                                                    </div>
                                                </v-card>
                                                <v-divider></v-divider>
                                            </v-row>

                                            <div class="ml-5 mt-9" v-if="reply == true">
                                                <v-card class="mt-5 ml-5 d-flex" flat>
                                                    <v-avatar width="50" height="50">
                                                        <img src="https://taphoammo.net/images/avatars/user.svg">
                                                    </v-avatar>
                                                    <div class="ml-3">
                                                        <div class="d-flex">
                                                            <b class="green--text ml-2">Hoang Vu</b>
                                                            <p class="mr-auto ml-2"
                                                                style="font-size: 15px; color: #757575; margin-top: 2px;">
                                                                @hoangvh185</p>
                                                        </div>
                                                        <p class="ml-2" style="font-size: 15px; color: #BDBDBD">thg 6 10,
                                                            2021
                                                            5:22 CH
                                                        </p>
                                                        <p class="ml-2"
                                                            style="font-size: 14px; word-break: break-word !important;">việc
                                                            xác thực là của fb mà bạn thì các web ứng dụng
                                                            làm sao
                                                            biết được tài khoản mật khẩu của user chứ.Thứ mà fb trả lại cho
                                                            web ứng
                                                            dụng chỉ là những thông tin như tên , avatar,...Hay nói cách
                                                            khác fb cho
                                                            gì thì mình dùng đấy chứ không phải mình muốn lấy gì cũng được.
                                                        </p>
                                                    </div>
                                                </v-card>
                                            </div>
                                        </div>
                                    </v-card>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </XyzTransition>
</template>
  
<script>
import Vue from "vue";

export default Vue.extend({
    name: "Authenticator",
    props: ["size"],
    data() {
        return {
            user: false,
            reply: true,
        };
    },
    watch: {
        "$route.query"(query) {
            if (query.id) {
                this.scrollTo(query.id);
            }
        },
    },
    methods: {
        scrollTo(name) {
            this.$refs[name]?.scrollIntoView({ behavior: "smooth" });
        },
    },
});
</script>
  
<style lang="scss">
.post {
    padding: 90px 50px 50px 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .v-tabs--vertical>.v-tabs-bar .v-tabs-bar__content {
        flex-direction: column;
        align-items: start;
    }

    .v-tab {
        text-transform: none;
        display: table;
        letter-spacing: 0;
        color: #000;
    }

    .v-tabs--vertical>.v-tabs-bar .v-tab {
        height: 40px;
    }

    .v-tabs--vertical>.v-tabs-bar {
        flex: 1 0 auto;
        height: initial;
    }

    .v-tabs-slider-wrapper {
        left: auto !important;
        left: 0;
    }

    .v-tabs--vertical>.v-tabs-bar .v-tabs-slider {
        height: auto;
    }
}

.post-res {
    padding: 90px 20px 50px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .v-tabs--vertical>.v-tabs-bar .v-tabs-bar__content {
        flex-direction: column;
        align-items: start;
    }

    .v-tab {
        text-transform: none;
        display: table;
        letter-spacing: 0;
        color: #000;
    }

    .v-tabs--vertical>.v-tabs-bar .v-tab {
        height: 40px;
    }

    .v-tabs--vertical>.v-tabs-bar {
        flex: 1 0 auto;
        height: initial;
    }

    .v-tabs-slider-wrapper {
        left: auto !important;
        left: 0;
    }

    .v-tabs--vertical>.v-tabs-bar .v-tabs-slider {
        height: auto;
    }
}
</style>
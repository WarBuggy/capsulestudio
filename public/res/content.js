window.langDef = 'vi';
window.langCur = window.langDef;
window.res = {
    common: {
        companyName: {
            en: 'Capsule Studio',
            vi: 'Capsule Studio',
        },
        menuItem: {
            'home': {
                en: 'HOME',
                vi: 'TRANG ĐẦU',
                link: 'index.html',
            },
            'work': {
                en: 'OUR WORKS',
                vi: 'DỰ ÁN',
                link: 'work.html',
            },
            'service': {
                en: 'SERVICES',
                vi: 'DỊCH VỤ',
                link: 'service.html',
            },
            'blog': {
                en: 'BLOG',
                vi: 'BLOG',
                link: 'blog.html',
            },
            // 'aboutUs': {
            //     en: 'ABOUT US',
            //     vi: 'GIỚI THIỆU',
            //     link: 'aboutus.html',
            // },
            'contact': {
                en: 'CONTACT',
                vi: 'LIÊN HỆ',
                link: 'contact.html',
                extraCss: ['contact'],
                id: 'menuTopButtonContact',
            },
        },
        footer: {
            oneText: {
                en: 'Not available. Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.',
                vi: 'Trực tiếp thiết kế, sản xuất, gia công hệ thống số hóa, phần mềm, app điện thoại, web app và các tố khác liên quan. Bảo đảm đáp ứng được nhu cầu đa dạng của quý khách hàng.',
            },
            twoTitle: {
                en: 'Helpful Links',
                vi: 'Thông tin ',
            },
            threeTitle: {
                en: 'Latest App',
                vi: 'Dự án',
            },
            fourTitle: {
                en: 'Contact Us',
                vi: 'Liên hệ',
            },
            fourText: {
                name: {
                    en: 'Address',
                    vi: 'Địa chỉ',
                    text: '1/16A Huỳnh Thiện Lộc, Hòa Thạnh<br>' +
                        'Tân Phú, Hồ Chí Minh, Việt Nam',
                },
                phone: {
                    en: 'Phone',
                    vi: 'SĐT',
                    text: '(+81) 0932 74 81 85',
                },
                email: {
                    en: 'Email',
                    vi: 'Email',
                    text: '<a href="mailto:admin@capsulestudio.com.vn">admin@capsulestudio.com.vn</a>',
                    extraCssText: ['email', ],
                },
            },
        },
        easing: {
            // no easing, no acceleration
            linear: function(t) { return t },
            // accelerating from zero velocity
            easeInQuad: function(t) { return t * t },
            // decelerating to zero velocity
            easeOutQuad: function(t) { return t * (2 - t) },
            // acceleration until halfway, then deceleration
            easeInOutQuad: function(t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
            // accelerating from zero velocity 
            easeInCubic: function(t) { return t * t * t },
            // decelerating to zero velocity 
            easeOutCubic: function(t) { return (--t) * t * t + 1 },
            // acceleration until halfway, then deceleration 
            easeInOutCubic: function(t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
            // accelerating from zero velocity 
            easeInQuart: function(t) { return t * t * t * t },
            // decelerating to zero velocity 
            easeOutQuart: function(t) { return 1 - (--t) * t * t * t },
            // acceleration until halfway, then deceleration
            easeInOutQuart: function(t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t },
            // accelerating from zero velocity
            easeInQuint: function(t) { return t * t * t * t * t },
            // decelerating to zero velocity
            easeOutQuint: function(t) { return 1 + (--t) * t * t * t * t },
            // acceleration until halfway, then deceleration 
            easeInOutQuint: function(t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t },
            // exponential decelerating
            exp: function(t) { return (1 - Math.exp(-t * 7)) },
            gompertz: function(t) { return Math.exp(-30 * Math.exp(-13 * t)); },
        },
    },
    home: {
        oneTitle: {
            en: "Check out our mobile apps we're working on.",
            vi: "Những dự án chúng tôi đã và đang phát triển.",
        },
        oneText: {
            en: "We develop apps and websites that delight your users and grow your business. " +
                "Enterprise-grade development combined with outstanding UI-centric design.",
            vi: "Các chương trình và web app chúng tôi phát triển luôn làm hài lòng quý khách hàng " +
                "và giúp công việc kinh doanh phát triển. " +
                "Quy trình phát triển chất lượng cao được kết hợp với thiết kế chú trọng trải nghiệm của khách hàng.",
        },
        oneButton: {
            en: "ALL WORKS",
            vi: "CÁC DỰ ÁN",
        },
        twoTitle: {
            en: 'Complete in-house software developement agency.',
            vi: 'Toàn bộ quá trình phát triển được thực hiện bởi chúng tôi.',
        },
        twoText: {
            en: 'Not available.',
            vi: 'Lập trình thực sự là niềm đam mê của tập thể công ty. ' +
                'Việc được phát triển 1 dự án từ đầu đến cuối là niềm mong mỏi của từng cá nhân.\n\n' +
                'Từ nắm rõ yêu cầu, tạo ra quy trình làm việc, phát triển hệ thống đền hướng dẫn vận hành và bảo trì, ' +
                'chúng tôi luôn đồng hành cùng quý khách để tạo ra được những sản phẩm tốt nhất nhất cho từng như cầu cụ thể.',
        },
        twoColumn: {
            first: [{
                    serviceName: 'req_spe',
                    extraCss: ['first', 'dummy', ],
                },
                {
                    serviceName: 'sys_des',
                    extraCss: ['dummy', ],
                },
            ],
            second: [{
                    serviceName: 'sof_dev',
                    extraCss: ['highlighted', ],
                },
                {
                    serviceName: 'mai_mon',
                    extraCss: ['dummy', ],
                },
            ],
        },
        threeItem: [{
                letter: 'S',
                title: 'SPEED', // SỨC MẠNH TẬP THỂ'
                text: {
                    en: 'With proven process, well-honed skill and hardworking, we are able to deliver results at an extraordinary pace.',
                    vi: 'Bằng quy trình chuẩn mực, kỹ năng tốt và chăm chỉ làm việc, ' +
                        'chúng tôi luôn đáp ứng được mọi nhu cầu cấp bách được quý khách hàng tin tưởng giao cho.',
                },
                extraCss: ['first', ],
            },
            {
                letter: 'P',
                title: 'PASSION', // PHÂN TÍCH
                text: {
                    en: 'Problem-solving through software development is what keeps us up at night and gets us out of bed in the morning.',
                    vi: 'Giải quyết các vấn đề của đời sống thực tế, qua các sản phẩm phần mềm đã, ' +
                        'trở thành một phần trong cuộc sống của tập thể công ty.',

                },
            },
            {
                letter: 'A',
                title: 'ANALYSIS', // AM HIỂU THỰC TẾ'
                text: {
                    en: 'Your problems are also ours. No stone left unturned until solutions are well-defined.',
                    vi: 'Vấn đề của quý khách hàng là nỗi trăn trở của chúng tôi. ' +
                        'Mọi khía cạnh sẽ được suy xét, phân tích, áp dụng cho đến khi vấn đề được giải quyết.',
                },
            },
            {
                letter: 'R',
                title: 'RESPONSIBILITY', // tRÁCH NHIỆM???
                text: {
                    en: 'Late night research, genuine consultation, throughout support. ' +
                        'We go at length to deliver all-round good products and experiences for you.',
                    vi: 'Nhiệm vụ, công việc được giao là phải được hoàn thành. ' +
                        'Chúng tôi sẽ không ngừng nghỉ cho đến khi hoàn thành trách nhiệm, của từng thành viên và cả tập thể',
                },
            },
            {
                letter: 'K',
                title: 'KNOWLEDGE', // KINH NGHIỆM
                text: {
                    en: 'We never rest in the pursuit of elegant solutions and interesting opportunities.',
                    vi: 'Khám phá và đóng góp cho cộng đồng công nghệ là niềm đam mê của mỗi cá nhân.' +
                        'Ngọn lửa này luôn được nâng niu và vun đắp để tạo ra những sản phẩm hoàn chỉnh.',
                },
            },
        ],
        fourTitle: {
            en: 'Our Team',
            vi: 'Đội ngũ',
        },
        fourText: {
            en: 'Not available.',
            vi: 'Xin hân hạnh giới thiệu những thành viên nòng cốt của Capsule Studio.\n' +
                'Những người sẽ trực tiếp tham gia phát triển sản phẩm.',
        },
        fourItem: [{
                name: {
                    en: 'Andy Duong',
                    vi: 'Dương Đ.Q. Dũng',
                },
                title: {
                    en: 'Requirement Engineer',
                    vi: 'Phân tích yêu cầu',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Là người quý khách hàng sẽ tiếp xúc đầu tiên và thường xuyên nhất. 16 năm kinh nghiệm xuyên suốt.',
                },
                image: 'home_team_andy',
            },
            {
                name: {
                    en: 'Ben Ho',
                    vi: 'Hồ V. Bửu',
                },
                title: {
                    en: 'System Engineer',
                    vi: 'Thiết kế hệ thống',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Kiến trúc hệ thống kiêm lập trình viên trên nền tảng Android. Từng làm việc ở 3 quốc gia khác nhau.',
                },
                image: 'home_team_ben',
            },
            {
                name: {
                    en: 'Kevin Do',
                    vi: 'Đỗ V. Dũng',
                },
                title: {
                    en: 'Automation Engineer',
                    vi: 'Kiểm soát chất lượng',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Bảo đảm sản phẩm đi vào hoạt động trơn tru, với đầy đủ tính năng yêu cầu. Một mắc xích cực kỳ quan trọng.  ',
                },
                image: 'home_team_kevin',
            },
            {
                name: {
                    en: 'Mi Nguyen',
                    vi: 'Nguyễn N.T. Mi',
                },
                title: {
                    en: 'Account Manager',
                    vi: 'Chăm sóc khách hàng',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Chịu trách nhiệm duy trì và phát triển mối quan hệ với quý khách hàng để có sự tin tưởng bền lâu.',
                },
                image: 'home_team_mi',
            },
        ],
        fiveItem: [{
                valueBegin: 0,
                valueEnd: 500,
                suffix: '+',
                name: {
                    en: 'Application\nAPI',
                    vi: 'Kêt nối\nAPI',
                },
                easing: 'easeInQuad',
            },
            {
                valueBegin: 0,
                valueEnd: 124,
                name: {
                    en: 'App\nversion',
                    vi: 'Phiên bản\nnâng cấp',
                },
                easing: 'easeInQuad',
            },
            {
                valueBegin: 0,
                valueEnd: 3,
                name: {
                    en: 'Enterprise\ncustomer',
                    vi: 'Doanh nghiệp\nTop 50',
                },
                easing: 'easeInQuad',
            },
            {
                valueBegin: 0,
                valueEnd: 1.5,
                suffix: 'M+',
                decimal: 1,
                name: {
                    en: 'End\nuser',
                    vi: 'Người\nsử dụng',
                },
                easing: 'easeInQuad',
                extraCss: ['last'],
            },
        ],
    },
    work: {
        title: {
            en: 'Our Works',
            vi: 'Dự án',
        },
        siteMapItemList: [
            ['common', 'menuItem', 'home'],
            ['common', 'menuItem', 'work'],
        ],
        item: {
            emos: {
                icon: window.version.image.home_work_common['hwc_emos'],
                name: 'EMOS',
                text: {
                    en: 'Manage inventory for multiple motorbike stores. Can be quickly adjusted for other purposes.',
                    vi: 'Quản lý kho cho hệ thống chuỗi cửa hàng đại lý xe máy. Dễ dàng điều chỉnh cho các mặt hàng khác.',
                },
                showInFooter: true,
                availability: [
                    { os: 'window', },
                ],
                tech: 'C#, MSSQL, .NET.',
                desc: {
                    en: 'Not available.',
                    vi: [
                        'Hệ thống hoàn chỉnh để quản lý xuất nhập kho, được thiết kế và phát triển cho khách hàng là ' +
                        'chủ chuỗi cửa hàng xe máy. Đây là giải pháp tầng enterprise, theo đúng quy chuẩn quốc tế về xuất nhập kho. ' +
                        'Giám đốc luôn có thể nắm được số lượng của hàng trăm mặt hàng lớn nhỏ, tại từng vị trí trong mỗi cửa hàng, ' +
                        'theo thời gian thực. Việc xuất nhập kho được thực hiện với sự trợ giúp của hệ thống, bảo đảm chính xác và ' +
                        'nhanh chóng. Việc quản lý chặt chẽ giúp đề cao tính trung thực của từng nhân viên, góp phần nâng cao hiệu quả ' +
                        'của môi trường làm việc.',

                        'Không dừng lại ở việc quản lý kho, hệ thống đã được yêu cầu nâng cấp, gắn thêm tính năng quản lý, theo dõi và ' +
                        'chăm sóc khách hàng. Việc nhắn tin chúc mừng khách hàng được thực hiện tự động theo điều chỉnh của quản lý. ' +
                        'Nhân viên CSKH sẽ được thông báo khi nào cần liên hệ, cũng như hướng dẫn từng nội dung cần thiết để tác nghiệp. ' +
                        'Tiếp tục sau đó là module quản lý các chương trình khuyến mãi, giảm giá, tặng quà, được hoàn toàn quản lý và ' +
                        'theo dõi bởi giám đốc và các nhân viên cấp quyền.',

                        'Hệ thống hiện đang được sử dụng trên 18 cửa hàng thuộc 2 công ty khác nhau. Việc huấn luyện nhân viên được thực hiện ' +
                        'trực tiếp bằng phương pháp tập trung cũng như tại từng cửa hàng cụ thể bởi đội ngũ tận tình và chuyên nghiệp.',

                        'Một điều xin được lưu ý là tuy được thiết kế riêng cho mặt hàng xe máy và các phụ tùng liên quan, ' +
                        'hệ thống có thể dễ dàng điều chỉnh cho phù hợp với các mặt hàng và môi trường khác nhau.'
                    ],
                },
                image: [
                    { name: 'work_emos_01', colSpan: true, },
                    { name: 'work_emos_02', colSpan: true, },
                ],
                version: [{
                        version: '1.2',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Quản lý các sự kiện, chương trình khuyến mãi.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý mức độ hiệu quả các sự kiện, chương trình khuyến mãi.',
                            },
                        ],
                    },
                    {
                        version: '1.1',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Quản lý khách hàng.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý các nghiệp vụ chăm sóc khách hàng.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý từng sự kiện chăm sóc khách hàng.',
                            },
                        ],
                    },
                    {
                        version: '1.0',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Quản lý của hàng, nhân viên.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý mặt hàng, phụ tùng.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý xuất nhập kho.',
                            },
                        ],
                    },
                ],
            },
            vqmm: {
                icon: window.version.image.home_work_common['hwc_vqmm'],
                name: 'Vòng Quay May Mắn',
                text: {
                    en: 'Complete browser-based system to manage and participate in multiple lucky wheel style events.',
                    vi: 'Hệ thống hoàn chỉnh để quản lý và tham dự các chương trình quay số trúng thưởng bằng trình duyệt web.',
                },
                showInFooter: true,
                availability: [
                    { os: 'www', link: 'https://mayman.acb.com.vn', },
                ],
                tech: 'Javascript, NodeJs, MySQL.',
                desc: {
                    en: [
                        'Not available.',

                        'mayman.acb.com.vn is a responsive microsite serving ACB customers. Qualified customers can log in at the ' +
                        'website and try their luck at the lucky wheel for prizes. Winners can go to ACB branches across the ' +
                        'country and claim their prizes. The microsite can host multiple events at the same time. Events are created ' +
                        'and managed by ACB.',

                        'The system includes the following components:<br>' +
                        '> The admin webapp where designated ACB headquarter employees can create and manage all aspects of an events, ' +
                        'such as timeline, graphics, prizes, rules. Admins can also generate various reports for management purposes.<br>' +
                        "> The website where customers can log in, spin the wheel, view winning history and other event’s information.<br>" +
                        '> The redeem webapp: ACB employees at any branches can log in with internal ACB credentials and ' +
                        'help customers exchange code for actual prizes.',
                    ],
                    vi: [
                        'mayman.acb.com.vn là trang web dành riêng cho các khách hàng của ngân hàng ACB tham gia các sự kiến quay số ' +
                        'trúng thưởng. Khi đủ điều kiện tham gia, khách hàng sẽ được thông báo và thử vận may tại trang web để trúng ' +
                        'các phần quà khách nhau. Quà trúng thưởng có thể được nhận tại các chi nhánh của ACB trên toàn quốc. ' +
                        'Nhiều sự kiện có thể diễn ra cùng lúc tại địa chỉ trên. Tất cả các sự kiện và thành phần liên quan đều được ' +
                        'quản lý hoàn toàn khép kín bởi nhân viên ACB.',

                        'Hệ thống được nâng cấp thêm tính năng quản lý khảo sát khách hàng tham gia, giúp ACB dễ dàng hơn trong việc ' +
                        'tìm hiểu và chăm sóc khách hàng. Hệ thống linh hoạt, cho phép thay đổi nội dung khảo sát và xuất ra các ' +
                        'báo cáo tương ứng.',

                        'Hệ thống bao gồm các thành phần sau:<br>' +
                        '> Trang web dành cho nhân viên ACB tại hội sở để quản lý, theo dõi toàn bộ các chi tiết liên quan đến các ' +
                        'sự kiện như thời gian, hình ảnh, giải thưởng, các quy tắc liên quan. Đây cũng nơi để xem và xuất các báo cáo ' +
                        'hỗ trợ cho việc quản lý.<br>' +
                        "> Trang web mayman.acb.com.vn, nơi khách hàng có thể đăng nhập theo thông tin được gửi qua email / SMS, " +
                        "xem nội dung sự kiện, quay số và quản lý các phần quà đã trúng.<br>" +
                        '> Trang trao quà danh cho nhân viên của ACB tại các chi nhánh trên toàn quốc. Được dùng để đối chiếu mã trúng ' +
                        'thưởng khách cung cấp với dữ liệu trên hệ thống, giúp việc nhận thưởng được nhanh chóng và chính xác.',
                    ],
                },
                image: [
                    { name: 'work_vqmm_01', },
                    { name: 'work_vqmm_02', },
                    { name: 'work_vqmm_03', colSpan: true, },
                ],
                version: [{
                        version: '1.1',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Quản lý kêt quả khảo sát.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý các khảo sát.',
                            },
                        ],
                    },
                    {
                        version: '1.0',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Quản lý quy trình trao quà.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý khách hàng.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý sự kiện (giải thưởng, nội dung thông báo, v..v..).',
                            },
                        ],
                    },
                ],
            },
            qdecor: {
                icon: window.version.image.home_work_common['hwc_qdecor'],
                name: 'Q Décor',
                text: {
                    en: 'Mobile app for Samsung that uses Agmented Reality (AR) to preview TV placement around the house.',
                    vi: 'App điện thoại sử dụng công nghệ AR để xem xét mức hài hòa của TV với nội thất trong nhà.',
                },
                showInFooter: true,
                availability: [
                    { os: 'android', },
                    { os: 'ios', },
                ],
                tech: 'ReactJS, ARCore.',
                desc: {
                    en: [
                        'Not available.',

                        "QLED TV is an Augmented Reality ( AR ) Application designed for Mobile to help users experience the new " +
                        "Samsung TVs before buying their new tvs. It’s an effective marketing tools target tech enthusiast.",
                    ],
                    vi: [
                        'Nhằm khẳng định vị trí đầu trong lĩnh vực sản xuất và phát triển TV màn hình rộng, đồng thời tạo sức ép lên ' +
                        'đối thủ cạnh tranh, Samsung đã phát triển app điện thoại Q Décor. Người sử dụng có thể ngắm nhìn Samsung QLED ' +
                        'TV trong không gian sống của bạn, Lựa chọn một chiếc TV phù hợp với không gian từng cá nhân dễ dàng với Q Décor, ' +
                        '"chuyên gia tư vấn" TV tuyệt vời. Sử dụng công nghệ Thực tế ảo mô phỏng nên một chiếc TV với kích thước ' +
                        'tương ứng thực tế, cho phép dễ dàng hình dung & lựa chọn chiết TV phù hợp với không gian sống',

                        'Sắm một chiếc TV mới là lựa chọn không dễ dàng. Nhưng với phép màu từ công nghệ Thực tế ảo, khách hàng có thể ' +
                        'thử lắp đặt tất cả mẫu TV trước khi chọn chiếc ưng ý nhất. Q Décor sẽ giúp:<br>' +
                        '> Lựa chọn kích thước TV nào là phù hợp với từng cá nhân nhất, dựa trên khoảng cách tối ưu cho người xem.<br>' +
                        '> Mẹo vặt trang trí nội thất cho căn hộ.<br>' +
                        '> Lên kế hoạch mua săms cho không gian giải trí hoàn hảo trước khi đến cửa hàng Samsung để mua sắm.',
                    ],
                },
                image: [
                    { name: 'work_qdecor_01', },
                    { name: 'work_qdecor_02', },
                    { name: 'work_qdecor_03', },
                    { name: 'work_qdecor_04', },
                ],
                version: [{
                        version: '1.1',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Quản lý kêt quả khảo sát.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý các khảo sát.',
                            },
                        ],
                    },
                    {
                        version: '1.0',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Quản lý quy trình trao quà.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý khách hàng.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Quản lý sự kiện (giải thưởng, nội dung thông báo, v..v..).',
                            },
                        ],
                    },
                ],
            },
            vcsc: {
                icon: window.version.image.home_work_common['hwc_vcsc'],
                name: 'VCSC Calendar',
                text: {
                    en: 'System to manage, provide and alert schedules for multiple conferences and events, on web and mobile.',
                    vi: 'Hệ thống quản lý, cung cấp và nhắc nhở lịch trình cho các cuộc hội họp, trên trình duyệt và điện thoại.',
                },
                showInFooter: true,
                availability: [
                    { os: 'android', link: 'https://play.google.com/store/apps/details?id=studio.paradoxcapsule.vcsc.calendar', },
                    { os: 'ios', link: 'https://apps.apple.com/us/app/vad-calendar/id1444769381', },
                ],
                tech: 'ReactJS',

                desc: {
                    en: [
                        'Not available.',

                        "VAD App is an internal Meeting Organizer system, designed for internal to schedules for customers " +
                        "meeting. The System features push notification, map, users management, checking in.",
                    ],
                    vi: [
                        'Hệ thống VAD được phát triển bởi CTCP Chứng Khoán Bản Việt (VCSC), bao gồm app điện thoại cho khách hàng ' +
                        'và web app dành cho quản trị hệ thống. Hệ thống giúp VCSC có thể dễ dàng quản lý các cuộc hội thảo, họp báo ' +
                        'nhằm cung cấp thông tin cho mọi đối tượng khách hàng về các diến biến và cơ hội của thị trường chứng khoán.',

                        'Với VAD app, khách mời có thể nhận thông báo, nhắc nhở khi có sự kiện; cũng như xem hướng dẫn vị trí của ' +
                        'nơi diễn ra. Ban tổ chức có thể linh hoạt thay đổi vị trí, thời gian của các cuộc họp để được sự phục vụ tốt ' +
                        'và khách mời luôn luôn được cập nhật những thông tin mới nhất.',
                    ],
                },
                image: [
                    { name: 'work_vcsc_01', },
                    { name: 'work_vcsc_02', },
                    { name: 'work_vcsc_03', },
                    { name: 'work_vcsc_04', },
                ],
                version: [{
                    version: '1.0',
                    desc: [{
                            en: 'Not available.',
                            vi: 'Quản lý mức độ tham gia của khách mời.',
                        },
                        {
                            en: 'Not available.',
                            vi: 'Quản lý sự kiện và các chi tiết liên quan (danh sách khách mời, bản đồ, v..v..).',
                        },
                    ],
                }, ],
            },
            hhdk: {
                icon: window.version.image.home_work_common['hwc_hhdk'],
                name: 'Huyền Học Du Ký',
                text: {
                    en: 'A complete web-based system to provide user with feng-shui information, with free and subscription model.   ',
                    vi: 'Hệ thống để quản lý và cung cấp thông tin về phong thủy cho người dùng, miễn phí và hay trả định kỳ.',
                },
                showInFooter: true,
                availability: [
                    { os: 'www', link: 'https://huyenhocduky.com', },
                ],
                tech: 'ReactJS, NodeJs, MySQL.',
                desc: {
                    en: [
                        'Not available.',

                        'mayman.acb.com.vn is a responsive microsite serving ACB customers. Qualified customers can log in at the ' +
                        'website and try their luck at the lucky wheel for prizes. Winners can go to ACB branches across the ' +
                        'country and claim their prizes. The microsite can host multiple events at the same time. Events are created ' +
                        'and managed by ACB.',

                        'The system includes the following components:<br>' +
                        '> The admin webapp where designated ACB headquarter employees can create and manage all aspects of an events, ' +
                        'such as timeline, graphics, prizes, rules. Admins can also generate various reports for management purposes.<br>' +
                        "> The website where customers can log in, spin the wheel, view winning history and other event’s information.<br>" +
                        '> The redeem webapp: ACB employees at any branches can log in with internal ACB credentials and ' +
                        'help customers exchange code for actual prizes.',
                    ],
                    vi: [
                        'huyenhocduky.com là một trang web để mọi người có thể tham khảo các thông tin liên quan đến phong thủy. Trang web ' +
                        'đã không ngừng tự nâng cấp và thêm các chức năng mới để tạo sự dễ dàng trong việc tìm hiểu tất cả các điều ' +
                        'liên quan tại một địa điểm duy nhất. Từ là việc phân tích lá số tử vi, cho đên việc chọn tên cho con, hay tìm hiểu ' +
                        'mức độ tương hổ của các thành viên trong 1 tập thể, người sử dụng luôn luôn có thể nhận ra nhiều điều thú vị qua ' +
                        'các phân tích sâu sắc trang web đưa ra. Các dịch vụ của trang web rất đa dạng, với nhiều cách tính phí khác nhau, ' +
                        'bảo đảm hài lòng mọi đối tượng sử dụng.',

                        'Các quy tắc và dữ liệu dùng để tính toán được quản lý bởi quản trị hệ thống. Điều này giúp cho việc nâng cấp, ' +
                        'đổi mới các quy định lâu đời cho phù hợp với cuộc sống hiện tại trở nên nhanh chóng và dễ dàng hơn bao giờ hết.',

                        'Với hơn 20 tính năng khác nhau, cộng với chính sách ưu đãi cho các thành viên nòng cốt, Huyền Học Du Ký hứa hẹn ' +
                        'sẽ là nơi hội tụ cho những người yêu mến bộ môn nghiên cứu lâu đời này.',
                    ],
                },
                image: [
                    { name: 'work_hhdk_01', },
                    { name: 'work_hhdk_02', },
                    { name: 'work_hhdk_03', colSpan: true, },
                ],
                version: [{
                        version: '1.3',
                        desc: [{
                            en: 'Not available.',
                            vi: 'Chức năng phân tích theo nguyên tắc thần số.',
                        }, ],
                    },
                    {
                        version: '1.2',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Chức năng hỗ trợ và chia phí cho các cộng tác viên.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Chức năng lưu nhớ dữ liệu đã nhập cho người sử dụng.',
                            },
                        ],
                    },
                    {
                        version: '1.1',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Thêm chức năng theo dõi lịch và vẽ biểu đồ thời vận.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Thêm các chức năng phân tích như la bàn, tử vi, lá số.',
                            },
                        ],
                    },
                    {
                        version: '1.0',
                        desc: [{
                                en: 'Not available.',
                                vi: 'Quản lý dữ liệu cho việc phân tích.',
                            },
                            {
                                en: 'Not available.',
                                vi: 'Chức năng phân tích tên, số điện thoại.',
                            },
                        ],
                    },
                ],
            },
            wbtv: {
                icon: window.version.image.home_work_common['hwc_wbtv'],
                name: 'World Best TV',
                text: {
                    en: 'A complete system to manage different concurrent prize-based events to celebrate Samsung 50th birthday.',
                    vi: 'Hệ thống để quản lý nhiều sự kiện trúng thưởng cùng lúc nhân dịp sinh nhật 50 tuổi của Samsung (2019).',
                },
                availability: [
                    { os: 'www', },
                ],
                tech: 'ReactJS, C#, .NET, MSSQL.',
                desc: {
                    en: [
                        'Not available.',
                        "World Best TV microsites are parts of Samsung’s campaign to celebrate 50 year anniversary. Visitors " +
                        "can visit the microsites and register to receive free prizes and store discount. In most cases, they " +
                        "receive automated emails informing about the results of their activities. There is also the admin web " +
                        "app where admins can create winning codes, manually select winners and create various reports for " +
                        "management purposes.",
                    ],
                    vi: [
                        "Nhân dịp sinh nhật 50 tuổi của Samsung, Samsung Việt Nam đã tổ chức ba sự kiện cho các khách hàng tham gia online. " +
                        "Các sự kiện bao gồm:<br>" +
                        "> Đăng ký trực tuyến để được bốc thăm ngẫu nhiên trúng thưởng.<br>" +
                        "> Tặng mã giảm giá sử dụng khi mua sắm tại các chuỗi bán lẻ tham gia sự kiện.<br>" +
                        "> Tặng TV mới cho chủ sở hữu của những chiếc TV Samsung thế hệ trước, căn cứ qua các bức ảnh được tải lên.",

                        "Một microsite và hệ thống quản lý đã được phát triển để dáp ứng nhu cầu đa dạng trên. Trang admin được xây dựng " +
                        "để có thể quản lý mã dự thưởng, các chuỗi bán lẻ cũng các thông tin dự thưởng khác. Việc thông báo trúng thưởng " +
                        "cũng được thực hiện tự động qua hệ thống. Hệ thống bảo đảm được đầy đủ các yêu cầu chặt chẽ của Samsung về mặt kỹ thuật " +
                        "cũng như bảo mật thông tin. Vì thế, chương trình có thể được vận hành và theo dõi bởi rất nhiều bộ phận khác nhau như " +
                        "nhân viên của Samsung (quốc tế và VN), công ty tổ chức sự kiện, quản lý cơ sở hạ tầng của Microsoft " +
                        "cũng như đội ngũ nhân viên của công ty.",
                    ],
                },
                image: [
                    { name: 'work_wbtv_01', },
                    { name: 'work_wbtv_02', },
                    { name: 'work_wbtv_03', },
                    { name: 'work_wbtv_04', },
                ],
                version: [{
                    version: '1.0',
                    desc: [{
                        en: 'Not available.',
                        vi: 'Phiên bản sử dụng trong suốt 2 tháng diễn ra sự kiện.',
                    }, ],
                }, ],
            },
            kungfuball: {
                icon: window.version.image.home_work_common['hwc_kungfuball'],
                name: 'Kung-fu ball',
                text: {
                    en: 'Mobile game app that drawn inspiration from the movie "Shaolin Soccer", made for a Google competition.',
                    vi: 'Game mobile dự thi giải "Game Launcher" do Google tổ chức, lấy ý tưởng từ phim "Đội bóng Thiếu Lâm".',
                },
                availability: [
                    { os: 'android', },
                ],
                tech: 'JAVA.',
                desc: {
                    en: [
                        'Not available.',
                    ],
                    vi: [
                        'Trò chơi mobile được tạo ra để tham gia cuộc thi Google Game Launcher (2018), dưới tên của công ty tiền thân.' +
                        'Lấy cảm hứng từ <a style="color:var(--logo-darkest);" href="https://www.youtube.com/watch?v=gmk1iStpovo">' +
                        'phân cảnh luyện tập</a> nổi tiếng của phim "Đội bóng Thiếu Lâm", người chơi sẽ vào vai một chú tiểu, luyện tập ' +
                        'sút bóng để cứu nguy cho làng của mình.',

                        'Xin chân thành cảm ơn Google đã tổ chức và huấn luyện các thành viên tham gia cuộc thi. ' +
                        'Trò chơi được viết trên nền tảng JAVA cho hệ điều hành Android, hoàn toàn không sử dụng bất kỳ một thư viện ' +
                        'hỗ trợ nào. Tuy không được vào sâu trong cuộc thi, quá trình thực hiện đã đem tới cho đội ngũ công ty một ' +
                        'niềm vui khôn tả khi được sống với đam mê và sở thích của mọi người.'
                    ],
                },
                image: [
                    { name: 'work_kungfuball_01', },
                    { name: 'work_kungfuball_02', },
                    { name: 'work_kungfuball_03', },
                    { name: 'work_kungfuball_04', },
                ],
                version: [{
                    version: '1.0',
                    desc: [{
                        en: 'Not available.',
                        vi: 'Phiên bản dự thi.',
                    }, ],
                }, ],
            },
            bts: {
                icon: window.version.image.home_work_common['hwc_bts'],
                name: 'Báo Trúng Số',
                text: {
                    en: 'A non-intrusive web-based service that notify users when a provided lottery number is a winning one.',
                    vi: 'Dịch vụ tiện lợi thông báo cho người dùng nếu vé số truyền thống (cung cấp trước đó) trúng thưởng.',
                },
                availability: [
                    { os: 'www', link: 'https://baotrungso.com' },
                ],
                tech: 'Javascript, NodeJS, MySQL.',
                desc: {
                    en: [
                        'Not available.',
                    ],
                    vi: [
                        'baotrungso.com là trang web cung cấp các dịch vụ tiện ích miễn phí cho người tham gia các giải xổ số ' +
                        'kiến thiết truyền thống. Tại đây, người sử dụng có thể cung cấp các vé cần dò trước khi có kết quả xổ số. ', +
                        'Nếu có vé trúng, hệ thống sẽ gửi email / SMS (dự định) đến từng người. Trang web được làm với tiêu chí ' +
                        'nhanh chóng, dễ dàng, chỉ cần những thông tin liên lạc tối thiểu, bảo vệ thông tin cho người sử dụng. ',

                        'Hệ thống tự động tìm thông tin sổ xố từ nhiều nguồn khác nhau, sau đó tổng kết và phân tích, tìm ra người ' +
                        'trúng giải trong những thông tin đã được cung cấp.',

                        'Ngoài ra, hệ thống còn cung cấp các tiện ích khác như sổ dò trong vòng 4 tuần trước; hay dò kết quả của vé số ' +
                        'trong tất cả các đài hiện hữu.'
                    ],
                },
                image: [
                    { name: 'work_bts_01', },
                    { name: 'work_bts_02', },
                    { name: 'work_bts_03', },
                    { name: 'work_bts_04', },
                ],
                version: [{
                    version: '1.0',
                    desc: [{
                        en: 'Experimental version.',
                        vi: 'Phiên bản thử nghiệm.',
                    }, ],
                }, ],
            },
        },
        textButton: {
            en: 'Detail',
            vi: 'Chi tiết',
        },
        workIndDescription: {
            en: 'Description',
            vi: 'Mô tả',
        },
        workIndScreenshot: {
            en: 'Screenshots',
            vi: 'Ảnh mình họa',
        },
        workIndVersion: {
            en: 'Version History',
            vi: 'Lịch sử phiên bản',
        },
    },
    service: {
        title: {
            en: 'Services',
            vi: 'Dịch vụ',
        },
        siteMapItemList: [
            ['common', 'menuItem', 'home'],
            ['common', 'menuItem', 'service'],
        ],
        item: {
            req_spe: {
                icon: 'hsc_doc',
                title: {
                    en: 'Requirements Specification',
                    vi: 'Phân tích yêu cầu',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Làm rõ yêu cầu, sau đó xem xét khả năng thực thi và làm tài liệu mô tả.',
                },
                text_ind: [{
                        type: 'text',
                        content: 'Khi đến với chúng tôi, quý khách có một ý tưởng. Có thể là việc đổi mới một quy trình để ' +
                            'đem lại hiệu suất cao hơn. Có thể là xây dựng môt hế thống hoàn toàn mới. Chúng tôi luôn sẵn sàng ' +
                            'lắng nghe mọi điều, từ nhỏ đến lớn; cũng như đóng góp các ý kiến chuyên môn trong lĩnh vực công nghệ, ' +
                            'để giúp quý khách hàng cụ thể hóa ý tưởng của mình thành những quy trình chặt chẽ, hiệu quả cao.',
                    },
                    {
                        type: 'text',
                        content: 'Việc tìm hiểu và phân tích yêu cầu là một giai đoạn mấu chốt trong quá trình phát triển. Nó đặt ' +
                            'ra những nền móng quan trọng nhất cho việc biến ý tưởng thành hiện thực. Nói đòi hỏi sự kết hợp của tất cả ' +
                            'các cá nhân, thành phần liên quan đến hệ thống sau này. Dự án có thành công hay không có thể khẳng định ' +
                            'được quá trình và kết quả của việc phân tích yêu cầu.',
                    },
                    {
                        type: 'text',
                        content: 'Với hơn 20 năm kinh nghiệm tập thể, chúng tôi tự tin sẽ luôn biến bất kỳ ý tưởng nào của ' +
                            'quý khách thành những yêu cầu rõ ràng, cụ thể, bám sát với như cầu thực tế, dựa trên những công nghệ ' +
                            'phù hợp và mới nhất. Nếu có như cầu, xin quý khách đừng do dự, mà hãy <a href="contact.html">' +
                            'cho chúng tôi biết ngay</a>. Việc tư vấn ban đầu sẽ hoàn toàn miễn phí và không đòi hỏi gì thông tin ' +
                            'cá nhân của quý khách.',
                    },
                ],
            },
            sys_des: {
                icon: 'hsc_gear',
                title: {
                    en: 'System Design',
                    vi: 'Thiết kế hệ thống',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Tạo ra hay chỉnh sửa quy trình làm việc đề phù hợp với nhu cầu đặt ra.',
                },
                text_ind: [{
                        type: 'text',
                        content: 'Chúng tôi luôn đưa ra các giải pháp phù hợp nhất với hoàn cảnh và nhu cầu hiện tại của ' +
                            'quý khách hàng. Từ hệ thống nhỏ lẻ độc lập đến việc tích hợp với các hệ thống của ngân hàng hay ' +
                            'máy chủ đám mây, chuyên môn và kinh nghiệm của đội ngũ công ty sẽ luôn đề ra hướng giải quyết hiệu quả ' +
                            'an toàn. ',
                    },
                    {
                        type: 'text',
                        content: 'Các thành phần mã nguồn mở nổi tiếng, đã qua chứng minh thực tiễn luôn được chúng tôi ưu tiên ' +
                            'sử dụng khi thiết kế hệ thống. Điều này giúp quý khách có được sự phục vụ tốt nhất với chi phí phát triển và ' +
                            'vận hành thấp nhất. Nếu có yêu cầu, chúng tôi vẫn có thể sẵn sàng thiết kế và phát triển toàn bộ từ những ' +
                            'bước đầu tiên, giúp hệ thống vận hành độc lập, không phụ thuộc vào những biến đổi đến từ môi trường bên ngoài.',
                    },
                    {
                        type: 'text',
                        content: 'Khi hệ thống liên quan đến quy trình và nhân sự vận hành của qúy khách hàng, chúng tôi sẽ làm việc ' +
                            'với từng bộ phận hay cá nhân để nắm được tình hình, từ đó đề ra những giải pháp thích hợp dự trên thông tin ' +
                            'thu thập. Giải pháp đề ra luôn phù hợp với khả năng của thành phần tham gia, bảo đảm hệ thống đi vào hoạt động ' +
                            'hiệu quả trong thời gian ngắn nhất.',
                    },
                ],
            },
            sof_dev: {
                icon: 'hsc_app',
                title: {
                    en: 'Software development',
                    vi: 'Phát triển phần mềm',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Phát triển trên mọi nền tảng. Khép tín, nhanh chóng và chát lượng.',
                },
                text_ind: [{
                        type: 'text',
                        content: 'Với đội ngũ lập trình viên kinh nghiệm, giàu kỹ năng, công ty luôn sẵn sàng thực hiện ' +
                            'bất cứ yêu cầu nào được đưa ra. Từ kiến tạo giao diện front-end đến những chức năng ' +
                            'hệ thống cho back-end, chúng tôi luôn làm chủ được công nghệ, dẫn đến việc phát triển có thể ' +
                            'được thực hiện trên bất kỳ nền tảng ngôn ngữ nào, độc quyền đến mã nguồn mở. Điều này giúp ' +
                            'quý khách hàng sẽ luôn có được sản phẩm hiểu quả nhất với chi phí phát triển và vận hành thấp nhất.',
                    },
                    {
                        type: 'text',
                        content: 'Chúng tôi hiểu rõ việc phát triển phần mềm không đơn giản là dựa vào kỹ thuật của ' +
                            'lập trình viên. Quản lý dự án luôn bám sát tiến độ từng dự án, cập nhật những yêu cầu và xử lý ' +
                            'những thay đổi mới nhất. Toàn đội ngũ luôn hướng về một mục tiêu là hoàn thành sản phẩm phù hợp nhất ' +
                            'với nhu cầu của quý khách hàng trong thời gian được giao.',
                    },
                    {
                        type: 'text',
                        content: 'Cho dù việc phát triển được làm theo mô hình tuần tự (waterfall) hay linh hoạt (agile), chúng tôi ' +
                            'luôn giữ sự liên hệ cần thiết với quý khách hàng. Mọi ý kiến, nhu cầu đều được truyền đạt tới mọi bên liên quan. ' +
                            'Đội ngũ lập trình viên cũng không ngần ngại đưa ra các ý kiến dựa trên kinh nghiệm lâu năm để góp phần tối ưu ' +
                            'hóa dự án. Vì thế các sản phẩm làm ra luôn có tính linh hoạt và độ ứng dụng thực tế cao nhất có thể.',
                    },
                ],
            },
            mai_mon: {
                icon: 'hsc_chart',
                title: {
                    en: 'Maintenance & Monitoring',
                    vi: 'Bảo trì & Theo dõi',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Theo dõi và xử lý các tình huống để bảo đảm như cầu vận hành.',
                },
                text_ind: [{
                        type: 'text',
                        content: 'Với kinh nghiệm góp phần thực hiện các sự kiện, chương trình khuyến mãi cho các công ty ' +
                            'Top 50, chúng tôi hiểu việc đồng hành cùng quý khách hàng là một mắc xích thiết yếu. Chúng tôi ' +
                            'nhận lãnh phần công tác kỹ thuật, để quý khách dồn tâm trí vào công việc chuyện môn, đem đến hiệu quả ' +
                            'cao nhất cho từng sự kiện.',
                    },
                    {
                        type: 'text',
                        content: 'Chúng tôi cũng thực hiện công việc huấn luyện, hướng dẫn sử dụng cho các nhân viên tại các ' +
                            'địa điểm khách hàng mong muốn. Với tác phong chuyên nghiệp, quen thuộc với nhiều vùng miền trên cả nước, ' +
                            'việc làm quen với chức năng hay hệ thống mới, sau đó đưa vào sử dụng và phát huy hiệu quả luôn diễn ra ' +
                            'nhanh chóng và ít tốn công sức.',
                    },
                    {
                        type: 'text',
                        content: 'Với phương châm phục vụ trên, Capsule Studio đã có được sự tin tưởng vững chắc từ nhiều ' +
                            'quý khách hàng, cụ thể hóa bằng các yêu cầu nâng cấp sản phẩm hàng năm. Với lượng người sử dụng ' +
                            'sản phẩm trải suốt chiều dài đất nước, chúng tôi luôn nỗ lực hết mình để phục vụ công tác hậu cần để ' +
                            'xứng đáng với sự tin tưởng vô giá của quý khách hàng.',
                    },
                ],
            },
            pro_gam: {
                icon: 'service_game',
                title: {
                    en: 'Promotional Game',
                    vi: 'Trò chơi quảng bá',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Tư vấn, thiết kế những trò chơi lôi cuốn cho các sự kiện hay chương trình quảng bá.',
                },
                text_ind: [{
                        type: 'text',
                        content: 'Các trò chơi đơn giản thường xuyên được sử dụng để lôi cuốn người tham gia. ' +
                            'Khách hàng sẽ cảm thấy hấp dẫn hơn nếu được trúng thưởng một món quà, thay vì chỉ đơn giản ' +
                            'là được tặng miễn phí. Sự hấp dẫn này đồng nghĩa với thương hiệu gắn kết với trò chơi sẽ ' +
                            'ấn tượng hơn, dẫn đến nhiều cơ hội giao dịch hơn.',
                    },
                    {
                        type: 'text',
                        content: 'Thiết kế và phát triển trò chơi luôn là niềm đam mê của từng thành viên trong công ty. ' +
                            'Chúng tôi luôn mong muốn được đem ngọn lửa này vào công việc, tạo ra những sản phẩm vừa mang tính ' +
                            'giải trí cao, vừa đem đến những hiệu quả rõ ràng trong đời sống thực tế. Điều này thể hiện rõ trong ' +
                            'độ tinh tế của các trò chơi đã được công ty sản xuất. Trò chơi nhỏ nhưng được áp dụng những ' +
                            'kinh nghiệm tích lũy từ các sản phẩm lớn, từ khâu thiết kế giao diện cho đến độ mượt mà khi sử dụng.'
                    },
                    {
                        type: 'text',
                        content: 'Chúng tôi luôn sẵn sàng thiết kế ra những trò chơi mới, lạ cũng như phát triển trên ' +
                            'những nền tảng ý tưởng đã được chứng minh hiệu quả cao. Từ việc lên ý tưởng, thiết kế sơ bộ cho đến ' +
                            'phát triển sản phầm và hoàn thiện đều được thực hiện bởi những cá nhân giàu kinh nghiệm và đam mê. ' +
                            'Chúng tôi cũng sẽ đồng hành cùng quý khách hàng trong suốt thời gian diễn ra sự kiện, ' +
                            'bảo đảm mọi chuyện sẽ thuận buồm xui gió.'
                    },
                ],
            },
            gra_ass: {
                icon: 'service_screenshot',
                title: {
                    en: 'Graphical Asset',
                    vi: 'Thiết kế hình ảnh',
                },
                text: {
                    en: 'Not available.',
                    vi: 'Tư vấn, thiết kế những hình ảnh minh họa phù hợp với hợp với nôi dung cần thiết.',
                },
                text_ind: [{
                        type: 'text',
                        content: 'Đối với các dự án liên quan đến khách hàng sử dụng phổ thông, việc trình bày bắt mắt là rất quan trọng. ' +
                            'Trình bày nội dung với một phong cách ấn tượng hay chuyên nghiệp sẽ giúp sản phẩm lập tức bắt được thiện cảm của ' +
                            'khách hàng. Sử dụng các hình ảnh đẹp, phù hợp với nội dung là cách tốt nhất để thực hiện điều trên. Capsule Studio ' +
                            'luôn có đội ngũ nhân viên và cộng tác viên kinh nghiệm để hỗ trợ quý khách hàng có được những hình ảnh đẹp nhất.',
                    },
                    {
                        type: 'text',
                        content: 'Chúng tôi có ê kíp cộng tác viên chụp ảnh sản phẩm chuyên nghiệp, tạo ra hình ảnh chất lượng cao, có thể ' +
                            'sử dụng vào nhiều mục đích: in ấn catalogue, menu nhà hàng, upload website, thiết kế các ấn phẩm quảng cáo online ' +
                            'hiệu quả, in ấn quảng cáo di động, cố định, billboard hoặc trên các phương tiện giao thông. Chúng tôi sẵn sàng đến ' +
                            'tận nơi, thực hiện chụp hình quảng cáo sản phẩm có kích thước lớn như: bàn ghế, giường tủ, sản phẩm công nghiệp, ' +
                            'sản phẩm hóa chất độc hại,...',
                    },
                ],
            },
        },
        contact: {
            en: 'Tell us about your projects and we’ll get back to you with details on how we can make this work. ' +
                'Or just ask us anything mobile.',
            vi: 'Cho chúng tôi biết về nhu cầu quý khách đang có! Chúng tôi sẽ liên hệ lại với gợi ý để biến thành hiện thực. ' +
                'Hay hỏi về bất cứ điều gì.',
        },
        contactButton: {
            en: 'Contact Us',
            vi: 'Liên hệ ngay',
        },
    },
    contact: {
        title: {
            en: 'Contact Us',
            vi: 'Liên hệ',
        },
        siteMapItemList: [
            ['common', 'menuItem', 'home'],
            ['common', 'menuItem', 'contact'],
        ],
        item: [{
                image: 'contact_location',
                text: 'name',
            },
            {
                image: 'contact_phone',
                text: 'phone',
            },
            {
                image: 'contact_email',
                text: 'email',
            },
        ],
        titleGrid: {
            en: 'Get in touch!',
            vi: 'Vài dòng để bắt đầu',
        },
        textGrid: {
            en: 'Not available.',
            vi: 'Mọi ý kiến khách hàng luôn luôn dược quan tâm, dù nhỏ đến đâu. ' +
                'Quý khách có vài điều cần biết thêm, nhưng không có thời gian? ' +
                'Chỉ cần cho chúng tôi biết phương thức và thời gian liên lạc. ' +
                'Hay quý khách muốn góp ý về vấn đề nào đấy? Chỉ cần cho chúng tôi biết nội dung.\n\n' +
                'Chúng tôi mong tạo được sự dễ dàng khi quý khách muốn liên hệ. ' +
                'Các ô dưới đây đều hoàn toàn không bắt buộc để tạo sự thoải mái khi trao đổi thông tin.',

        },
        inputName: {
            en: 'Name (optional)',
            vi: 'Tên (không băt buộc)',
        },
        inputContact: {
            en: 'Phone / Email (optional)',
            vi: 'Điện thoại / Email (không bắt buộc)',
        },
        inputMessage: {
            en: 'Message (optional)',
            vi: 'Nội dung (không bắt buộc)',
        },
        buttonText: {
            en: 'SEND',
            vi: 'GỬI',
        },
        popup: {
            success: {
                en: 'Information will be processed within 48 hours.<br>Many thanks for this opportunity!',
                vi: 'Nội dung sẽ được xử lý trong vòng 48 tiếng.<br>Xin chân thành cảm ơn!'
            },
            fail: {
                en: 'Sorry, we could not process your contact request (error |<|code|>|). Please contact us via email or phone!',
                vi: 'Xin thành thật xin lỗi, hệ thống đã gặp lỗi (|<|code|>|)<br>Xin vui lòng liên hệ với chúng tôi qua email hay số điện thoại!',
            },
        },
    },
    blog: {
        title: {
            en: 'Blog',
            vi: 'Blog',
        },
        siteMapItemList: [
            ['common', 'menuItem', 'home'],
            ['common', 'menuItem', 'blog'],
        ],
        button: {
            en: 'Read more',
            vi: 'Xem nội dung',
        },
        dateFormat: {
            en: '<b>month-day</b><br>year',
            vi: '<b>day-month</b><br>year',
        },
        backToTop: {
            en: 'ToC',
            vi: 'Mục lục',
        },
        item: {
            blog1: {
                date: '2021-08-11',
                thumbnail: 'res/img/blog/thumb1.jpg?1.0',
                title: {
                    en: 'The best way to use SVG images on web pages.',
                    vi: 'Cách tốt nhất để sử dụng hình SVG trên trang web.',
                },
                desc: {
                    en: 'Not available.',
                    vi: 'Tận dụng lợi thế hiểu được CSS của SVG, đồng thời giữ được mọi thứ ngăn nắp, tách biệt và dễ kiểm soát.',
                },
                imageList: {},
                content: [{
                        type: 'title',
                        content: {
                            en: 'Not available.',
                            vi: 'Vì sao sử dụng SVG?',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Đã có rất nhiều bài viết nêu lên các lợi ích khi sử dùng hình định dạng SVG. Xin tóm tắt nhanh 
                                gọn tại đây một vài điều để các độc giả dễ theo dõi:
                                '<ul>
                                <li>Một hình duy nhất cho mọi độ phân giải màn hình.
                                <li>Có thể tương tác với từng thành phần trong hình.
                                <li>Có thể chỉnh sửa dễ dàng nếu là lập trình viên.
                                <li>Có thể hiểu tất cả các luật CSS được khai báo trong phạm vi toàn trang web.
                                </ul>
                                Bài viết này xin được nói về điều cuối và phương pháp tốt nhất để tận dụng được điểm mạnh này.`,
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'Not available.',
                            vi: 'CSS trên toàn trang?',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Lấy ví dụ <a href='https://codepen.io/hovanbuu/pen/GRmzNay'>code pen</a> đơn giản này. Nó bao gồm 
                                một luật CSS duy nhất:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'css',
                        content: ".fill-color {&newline" +
                            "&indentfill: red;&newline" +
                            "}",
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Và trang html cũng chỉ chứa một hình svg đơn giản là một hình tròn:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'xml',
                        content: '<svg width="200px" height="200px" viewBox="0 0 200 200">&newline' +
                            '&indent<circle id="circleInSvg" class="fill-color" cx="100" cy="100" r="100" />&newline</svg>',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Trang sẽ hiển thị 1 hình tròn được tô đỏ đỏ bên trong.
                                <svg width="200px" height="200px" viewBox="0 0 200 200" style='display: block; 
                                    margin: 15px 0px 15px 0px;'>
                                <circle fill="red" cx="100" cy="100" r="100" />&newline
                                </svg>
                                Nếu xem chi tiết thẻ <span style='font-family: monospace;'>circle</span>, chúng ta sẽ 
                                thấy lớp CSS được khai báo là <span style='font-family: monospace;'>fill-color</span>.
                                Trong nội bộ của thẻ <span style='font-family: monospace;'>circle</span> không hề có lớp
                                này, nhưng hình vẫn được tô đỏ, đó là vì nội dung của hình SVG được trình duyệt xử lý như 
                                một thành phần HTML bình thưởng trên trang, chia sẻ được với tất cả các thành phần còn lại. 
                                Mọi thành phần trong SVG đều có thể được điều khiển và xứ lý như các div, span, v..v.. Nếu
                                đánh vào console của trình duyệt lệnh tìm sau: `,
                        },
                    },
                    {
                        type: 'code',
                        language: 'javascript',
                        content: 'document.getElementById("circleInSvg");',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Kết quả sẽ là thẻ <span style='font-family: monospace;'>circle</span> (nằm bên trong thẻ 
                                <span style='font-family: monospace;'>svg</span>). Việc tìm kiếm này giống như bất kỳ thành phần 
                                HTML nào khác trên trang.`,
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'Not available.',
                            vi: 'In-line SVG',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Tuy nhiên, điều trên chỉ có thể thực hiện được nếu toàn bộ nội dung của hình SVG được 
                                khai báo trực tiếp trong HTML của trang. Nếu SVG được sử dụng thông qua thẻ 
                                <span style='font-family: monospace;'>img</span> như sau:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'xml',
                        content: '<img src="path/image.svg" >',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `hay sử dụng thẻ <span style='font-family: monospace;'>object</span>:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'xml',
                        content: '<object data="path/image.svg" type="image/svg+xml">',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `chúng ta sẽ thấy hình tròn bị tô đen, màu mặc định. Lớp CSS 
                        <span style='font-family: monospace;'>fill-color</span> trở nên vô nghĩa 
                        với các thành phần bên trong hình SVG nếu sử dụng cách trên. SVG phải được khai báo trực điếp trong 
                        HTML thì mới phát huy dược hết hiệu quả.`,
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'But in-line SVG is so messy!',
                            vi: 'Khai báo trực tiếp nhìn rối quá!',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Đúng như vậy! Việc bảo trì mã nguồn in-line làm mọi thứ trở nên phức tạp và mất đi tính độc lập. 
                            Để chỉnh sửa một hình, chúng ta phải vào nơi có cả những thông tin khác để chỉnh sửa. Điều này dễ 
                            dẫn tới các sai sót và lỗi một cách không cần thiết. Vậy có cách nào để vừa bảo đảm tính linh hoạt của 
                            hình SVG, vừa giữ mọi thứ trật tự ngăn nắp?`,
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'Not available.',
                            vi: 'Cách sử dụng SVG tốt nhất',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Xin giới thiệu với quý độc giả một phương pháp đơn giản để có thể khai báo SVG trực tiếp trong HTML. 
                            Đầu tiên, chúng ta gửi yêu cầu tải nội dung của SVG. Việc đó có thể thực hiện bằng một hàm tương tự như sau:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'javascript',
                        content: 'function asyncLoadSVGContent(link) {&newline' +
                            '&indentreturn new Promise(function(resolve) {&newline' +
                            '&indent&indentlet request = new XMLHttpRequest();&newline' +
                            '&indent&indentif (request != null) {&newline' +
                            '&indent&indent&indentrequest.open("GET", link, true);&newline' +
                            '&indent&indent&indentrequest.onreadystatechange = function() {&newline' +
                            '&indent&indent&indent&indentif (request.readyState == 4 && request.status == 200) {&newline' +
                            '&indent&indent&indent&indent&indentresolve(request.responseText);&newline' +
                            '&indent&indent&indent&indent}&newline' +
                            '&indent&indent&indent};&newline' +
                            '&indent&indent&indentrequest.send();&newline' +
                            '&indent&indent}&newline' +
                            '&indent});&newline' +
                            '};',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Hàm trên sẽ tải nội dung của hình SVG, 
                            <a href='https://viblo.asia/p/giai-thich-ve-asyncawait-javascript-trong-10-phut-1VgZvBn7ZAw'>bất đồng bộ</a>. 
                            Để sử dụng nội dung này, chúng ta có dùng mã tương tự như dưới đây:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'javascript',
                        content: 'window.onload = async function() {&newline' +
                            '&indentlet contentSVG = await asyncLoadSVGContent("path/image,svg");&newline' +
                            '&indentlet divParent = document.getElementById("divParentId");&newline' +
                            '&indentdivParent.innerHTML = divParent.innerHTML.concat(contentSVG);&newline' +
                            '};',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `<span style='font-family: monospace;'>divParent</span> là thành phần HTML dùng để chứa hình SVG. 
                            Nếu thành công, hình SVG sẽ trở thành 1 phần của trang HTML, trong khi vẫn giữ được sự ngăn nắp, độc lập.
                            <br><br>
                            Bài viết đến đây là kết thúc. Xin cảm ơn sự theo dõi và chúc các quý độc giả luôn giữ được ngọn lửa đam mê! 
                            Thân ái!`,
                        },
                    },
                ],
            },
            blog2: {
                date: '2021-08-13',
                thumbnail: 'res/img/blog/thumb2.jpg?1.0',
                title: {
                    en: 'CSS Variables, SVG and Web Dark/Light Color Scheme.',
                    vi: 'Biến CSS, hình SVG và chế độ màn hình sáng/tối cho trang web.',
                },
                desc: {
                    en: 'Not available.',
                    vi: 'Kết hợp các khả năng mới của HTML và CSS để đem đến tiện tích chế dộ sáng/tối cho người sử dụng.',
                },
                imageList: {
                    'blog2_1': 'res/img/blog/blog2_1.jpg',
                    'blog2_2': 'res/img/blog/blog2_2.svg',
                },
                content: [{
                        type: 'title',
                        content: {
                            en: 'Light and dark mode',
                            vi: 'Chế độ màn hình sáng tối',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Chế độ màn hình buổi tối (dark mode) trở nên rất thịnh hành trong vài năm vừa qua. Đã có các chương trình,  
                            ứng dụng dùng mặc định chế độ này (VS Code dùng Dark Theme+). Các hệ điều hành 
                            thông dụng điều đã tích hợp chế độ hiển thị ít tương phản này vào danh sách tiện ích của mình. Các 
                            trình duyệt cũng vậy. Trình duyệt Samsung trên điện thoại còn có khả năng đoán và tự đổi màu của các 
                            trang web về chế độ buổi tối.`,
                        },
                    },
                    {
                        type: 'image',
                        image: 'blog2_1',
                        content: {
                            en: 'Not available',
                            vi: 'So sánh giữa chế độ ngày và đêm (do máy xử lý) trên Samsung S9+ (2021).',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available',
                            vi: `Cho dù khả năng tự xử lý của trình duyệt hay hệ điều hành là khá tốt, trang web vẫn nên có thiết kế 
                            riêng cho chế độ buổi tối. Điều này đảm bảo tính thẩm mỹ của trang không bị ảnh hưởng khi người sử dụng 
                            muốn chuyển chế độ.`,
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'Challenge of the dark side',
                            vi: 'Thử thách của bóng tối',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Các nhà thiết kế có sử dụng một tông màu cho cả hai chế độ sáng tối. Nếu lưu ý logo của VNExpress 
                            trong hình trên, các bạn sẽ thấy nó vẫn có độ tương phản hợp lý cho cả hai màu nền. Tuy nhiên để thiết kế 
                            toàn bộ một trang web như thế thì sẽ khó lòng đạt được mức độ thẩm mỹ mong muốn. Hai bộ màu sắc khác nhau 
                            sẽ tốt hơn một, như thường lệ. Nếu trang web chỉ đơn giản cần đổi một vài màu nền và màu chữ thì vấn đề 
                            sẽ đơn giản. Tuy nhiên, khả năng thay đổi hình ảnh cho phù hợp là hoàn toàn có thể xảy ra. Lấy ví dụ như 
                            phần loading của chính trang web này. Khi mới bắt đầu, trang sẽ có một màn hình chờ trong khi hình ảnh 
                            được tải trước về mày như sau:`,
                        },
                    },
                    {
                        type: 'image',
                        image: 'blog2_2',
                        landscape: true,
                        content: {
                            en: 'Not available',
                            vi: 'Màn hình chờ cho 4 chế độ khác nhau.<br>(Hình ảnh được tải từ <a href="loading.io">loading.io</a>)',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Để có được một hiệu úng đẹp mắt và hợp lý, chúng ta có thể cần đến 4 hình khác nhau. Nếu một trang web 
                            chú trọng đến đến chi tiết, khả năng rất cao số lượng hình sẽ tăng lên với tốc độ chóng mặt. Khi đó, việc 
                            quản lý hình ảnh sẽ đòi hỏi rất nhiều công sức. Một chỉnh sửa nhỏ về màu sắt có thể dẫn đến thao tác trên 
                            vài chục tấm hình khác nhau.`,
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'CSS and SVG come to the rescue',
                            vi: 'Bộ đôi CSS và SVG sẽ cứu nguy',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Người hùng thật sự chính là <a href='https://www.w3.org/community/groups/'>các thành viên của W3C</a>, 
                            làm việc không ngừng nghỉ để thế giới Internet ngày càng hấp dẫn hơn. Với biến CSS và SVG, chúng ta đáp ứng 
                            được các đòi hỏi trên dễ dàng hơn mà vẫn giữ được sự đơn giản trong tài nguyên hình ảnh của trang web.`,
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Bài viết dành cho các độc giả đã có kiến thức cơ bản về 
                            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties'>biến CSS</a> và 
                            <a href='https://www.w3schools.com/graphics/svg_intro.asp'>SVG</a>, cũng như đã biết cách 
                            <a href=''>kết hợp CSS và SVG</a> vào trên trang web.`,
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Cho mục đích của bài viết, hãy giả sử trang web có hai bộ màu. Mỗi bộ màu gồm có hai màu nền (cùng tông) 
                            và một màu tương phản. Cho bộ màu buổi sáng, 3 màu này sẽ là <span style='color: #4886FF;'>#4886FF</span>, 
                            <span style='color: #24CDFF;'>#24CDFF</span> và 
                            <span style='color: #FFFFFF; background-color: #121212;'>#FFFFFF</span>. 
                            Bộ buổi tối là <span style='color: #F58300;'>#F58300</span>, <span style='color: #FFD500;'>#FFD500</span> 
                            và <span style='color: #121212; background-color: #FFF;'>#121212</span>.`,
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'Declare CSS variables',
                            vi: 'Khai báo các biến CSS',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Bộ màu sáng sẽ là mặc định cho trang web. Bộ màu sẽ được khai báo như sau:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'css',
                        content: ':root {&newline' +
                            '&indent--color-bg-1: #4886FF;&newline' +
                            '&indent--color-bg-2: #24CDFF;&newline' +
                            '&indent--color-foreground: #FFFFFF;&newline' +
                            '}',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Bộ màu tối có thể được khai báo ngay sau đó bằng cách sau:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'css',
                        content: '@media (prefers-color-scheme: dark) {&newline' +
                            '&indent:root {&newline' +
                            '&indent&indent--color-bg-1: #F58300;&newline' +
                            '&indent&indent--color-bg-2: #FFD500;&newline' +
                            '&indent&indent--color-foreground: #121212;&newline' +
                            '&indent}&newline' +
                            '}',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Nếu khai báo thành công thì tại bất cứ nơi nào trên trang web thích hợp cho việc dùng CSS, chuỗi 
                            <span style='font-family: monospace;'>var(----color-bg-1)</span> sẽ được hiểu là màu 
                            <span style='color: #4886FF;'>#4886FF</span>.`,
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'Not available.',
                            vi: 'Sử dụng biến CSS trong hình SVG'
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Khi xem trang trên các thiết bị mobile, quý độc giả sẽ thấy animation sau khi trang đang tải hình trước:`,
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: '<svg width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">' +
                                '<circle cx="50" cy="23" r="13">' +
                                '<animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline"' +
                                'keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23" />' +
                                '</circle>&newline' +
                                '</svg>',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Một hình tròn chuyển động theo trục thẳng đứng. Mã nguồn cho hình SVG trên là như sau:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'xml',
                        content: '<svg width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">&newline' +
                            '&indent<circle cx="50" cy="23" r="13">&newline' +
                            '&indent&indent<animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline"&newline' +
                            '&indent&indent&indentkeySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23">&newline' +
                            '&indent&indent</animate>&newline' +
                            '&indent</circle>&newline' +
                            '</svg>',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Hình bao gồm một thẻ <span style='font-family: monospace;'>circle</span> và một thẻ 
                            <span style='font-family: monospace;'>animation</span>. Chúng ta có thể dễ dàng đoán rằng, nếu muốn thay đổi màu cho hình, 
                            thẻ <span style='font-family: monospace;'>circle</span> cần phải được chỉnh sửa. Thông thường, màu của các hình trong SVG 
                            có thể được thay đổi bằng thuộc tính <span style='font-family: monospace;'>fill</span>. Ví dụ, nếu cần phải đổi thành màu 
                            xanh, chúng ta có thể thêm vào như sau:`,
                        },
                    },
                    {
                        type: 'code',
                        language: 'xml',
                        content: '<circle cx="50" cy="23" r="13" fill="blue">',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Chúng ta sẽ có hình như mong muốn:`,
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: '<svg width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">' +
                                '<circle cx="50" cy="23" r="13" fill="blue">' +
                                '<animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline"' +
                                'keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23" />' +
                                '</circle>&newline' +
                                '</svg>',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Theo giả cảnh của bài viết, chúng ta cần đổi thành màu 
                            <span style='color: #FFFFFF; background-color: #121212;'>#FFFFFF</span> khi bình thường và màu 
                            <span style='color: #121212; background-color: #FFFFFF;'>#121212</span> ở chế độ buổi tối. Nhưng thay vì 
                            cần phải có 2 hình hầu như giống nhau, chỉ khác ở chi tiết <span style='font-family: monospace;'>fill</span>,
                            chúng ta chỉ cần 1 hình với thuộc tính <span style='font-family: monospace;'>fill</span> như sau:`
                        },
                    },
                    {
                        type: 'code',
                        language: 'xml',
                        content: '<circle cx="50" cy="23" r="13" fill="var(--color-foreground)">',
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Nếu xem hình riêng biệt bằng các công cụ hình như Paint, quý độc giả sẽ chỉ thấy màu đen như bình thường. 
                            Đó là vì biến CSS <span style='font-family: monospace;'>color-foreground</span> chỉ có nghĩa trong phạm vi trang. 
                            Nếu xem tại trang web, quý độc giả có thể thấy màu thay đổi tùy theo chế độ sáng / tối. Màu nền của svg đã được 
                            tô xám để tiện theo dõi.`
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: '<svg width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"' +
                                'style="background-color: grey;">' +
                                '<circle cx="50" cy="23" r="13" fill="var(--color-foreground)">' +
                                '<animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline"' +
                                'keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23" />' +
                                '</circle>&newline' +
                                '</svg>',
                        },
                    },
                    {
                        type: 'title',
                        content: {
                            en: 'Conclusion',
                            vi: 'Lời kết',
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Mã cho bài viết có thể tìm thấy tại <a href="https://codepen.io/hovanbuu/pen/wvdZdRe">code pen</a>. HTML5, CSS và JS
                            đang dần trở nên những thế lực đáng gờm trong lĩnh vực lập trình giao diện. Mong sao cho bộ ba này tiếp tục phát triển bền 
                            vững, trở thành tiêu chuẩn về mặt dễ dàng, tiện lợi cho các ngôn ngữ noi theo trong việc thiết kế và lập trình front-end.`,
                        },
                    },
                    {
                        type: 'text',
                        content: {
                            en: 'Not available.',
                            vi: `Bài viết tới đây là hết. Xin cảm ơn sự theo dõi của quý độc giả!`,
                        },
                    },
                ],
            },
            blog3: {
                date: '2021-08-30',
                thumbnail: 'res/img/blog/thumb3.jpg?1.0',
                title: {
                    en: 'Title',
                    vi: 'Tựa đề',
                },
                desc: {
                    en: 'Desc',
                    vi: 'Mô tả',
                },
                imageList: {},
                content: {},
                hidden: true,
            },
            blog4: {
                date: '2021-09-01',
                thumbnail: 'res/img/blog/thumb2.jpg?1.0',
                title: {
                    en: 'Title',
                    vi: 'Tựa đề',
                },
                desc: {
                    en: 'Desc',
                    vi: 'Mô tả',
                },
                imageList: {},
                content: {},
                hidden: true,
            },
        },
        contact: {
            en: 'Tell us about your projects and we’ll get back to you with details on how we can make this work. ' +
                'Or just ask us anything mobile.',
            vi: 'Cho chúng tôi biết về nhu cầu quý khách đang có! Chúng tôi sẽ liên hệ lại với gợi ý để biến thành hiện thực. ' +
                'Hay hỏi về bất cứ điều gì.',
        },
        contactButton: {
            en: 'Contact Us',
            vi: 'Liên hệ ngay',
        },
    },
};
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
            'aboutUs': {
                en: 'ABOUT US',
                vi: 'GIỚI THIỆU',
                link: 'aboutus.html',
            },
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
                    title: {
                        en: 'Requirements Specification',
                        vi: 'Phân tích yêu cầu',
                    },
                    text: {
                        en: 'Not available.',
                        vi: 'Làm rõ yêu cầu, sau đó xem xét khả năng thực thi và làm tài liệu mô tả.',
                    },
                    extraCss: ['first', 'dummy', ],
                },
                {
                    serviceName: 'sys_des',
                    title: {
                        en: 'System Design',
                        vi: 'Thiết kế hệ thống',
                    },
                    text: {
                        en: 'Not available.',
                        vi: 'Tạo ra hay chỉnh sửa quy trình làm việc đề phù hợp với nhu cầu đặt ra.',
                    },
                    extraCss: ['dummy', ],
                },
            ],
            second: [{
                    serviceName: 'sof_dev',
                    title: {
                        en: 'Software development',
                        vi: 'Phát triển phần mềm',
                    },
                    text: {
                        en: 'Not available.',
                        vi: 'Phát triển trên mọi nền tảng. Khép tín, nhanh chóng và chát lượng.',
                    },
                    extraCss: ['highlighted', ],
                },
                {
                    serviceName: 'mai_mon',
                    title: {
                        en: 'Maintenance & Monitoring',
                        vi: 'Bảo trì & Theo dõi.',
                    },
                    text: {
                        en: '',
                        vi: 'Theo dõi và xử lý các tình huống để bảo đảm như cầu vận hành.',
                    },
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
            },
            wbtv: {
                icon: window.version.image.home_work_common['hwc_wbtv'],
                name: 'World Best TV',
                text: {
                    en: 'A complete system to manage different concurrent prize-based events to celebrate Samsung 50th birthday.',
                    vi: 'Hệ thống để quản lý nhiều sự kiện trúng thưởng cùng lúc nhân dịp sinh nhật 50 tuổi của Samsung ',
                },
                availability: [
                    { os: 'www', },
                ],
                tech: 'ReactJS, C#, .NET, MSSQL.',
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
        req_spe: {
            icon: 'hsc_doc',
        },
        sys_des: {
            icon: 'hsc_gear',
        },
        sof_dev: {
            icon: 'hsc_app',
        },
        mai_mon: {
            icon: 'hsc_chart',
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
};
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
                link: 'works.html',
            },
            'service': {
                en: 'SERVICES',
                vi: 'DỊCH VỤ',
                link: 'services.html',
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
        emos: {
            icon: 'res/img/icon_emos.png',
            name: 'EMOS',
            showInFooter: true,
        },
        vqmm: {
            icon: 'res/img/icon_vqmm.png',
            name: 'Vòng Quay May Mắn',
            showInFooter: true,
        },
        qdecor: {
            icon: 'res/img/icon_q.png',
            name: 'Q Décor',
            showInFooter: true,
        },
        vcsc: {
            icon: 'res/img/icon_vcsc.png',
            name: 'VCSC Calendar',
            showInFooter: true,
        },
        hhdk: {
            icon: 'res/img/icon_hhdk.png',
            name: 'Huyền Học Du Ký',
            showInFooter: true,
        },
        wbtv: {
            icon: 'res/img/icon_wbtv.png',
        },
        kungfuball: {
            icon: 'res/img/icon_kungfuball.png',
        },
        bts: {
            icon: 'res/img/icon_bts.png',
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
    },
};
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
                vi: 'LIÊN LẠC',
                link: 'contact.html',
                extraCss: ['contact'],
                id: 'menuTopButtonContact',
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
            vi: "Các chương trình và trang web chúng tôi phát triển giúp khách hàng đạt được mục đích " +
                "và công việc kinh doanh của bạn phát triển. " +
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
    },
    work: {
        emos: {
            icon: 'res/img/icon_emos.png',
        },
        vqmm: {
            icon: 'res/img/icon_vqmm.png',
        },
        qdecor: {
            icon: 'res/img/icon_q.png',
        },
        vcsc: {
            icon: 'res/img/icon_vcsc.png',
        },
        hhdk: {
            icon: 'res/img/icon_hhdk.png',
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
};
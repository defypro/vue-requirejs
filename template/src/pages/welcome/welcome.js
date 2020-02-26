define([
        'vue',
        'text!./welcome.html!strip'
    ],
    function (vue, demoHtml) {
        var demo = vue.extend({
            template: demoHtml,
            data: function () {
                return {

                }
            },
            methods: {

            }
        });
        return demo;
    });
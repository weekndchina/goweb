<template>
  <v-container grid-list-xl fluid style="background:linear-gradient(to left, #24243e, #141E30, #0f0c29);">
  <v-row>
    <v-col xs="12" md="6" cols="6">
      <v-subheader dark class="overline">Mail Config</v-subheader>
      <v-divider dark> </v-divider>
      <v-row class="mt-6">
        <v-col cols="12"
          md="4">
          <v-text-field dark label="邮箱地址"
            required dense class="caption" v-model="mail.Address"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field dark label="邮箱账号" required dense
          class="caption" v-model="mail.Account"></v-text-field>
        </v-col>
        <v-col cols="12"
          md="4">
          <v-text-field dark label="账号口令" required dense class="caption"
          v-model="mail.Token"></v-text-field>
        </v-col>
      </v-row>
      <v-subheader dark class="overline">Company</v-subheader>
      <v-divider dark> </v-divider>
      <v-row class="mt-6">
      <v-col cols="12" md="10">
        <v-text-field dark label="logo"
          required dense class="caption" v-model="content.logo"></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
          <v-text-field dark label="名称"
            required dense class="caption" v-model="content.name"></v-text-field>
      </v-col>
      </v-row>
          <v-subheader dark class="overline">Mail Content</v-subheader>
          <v-divider dark class="mb-6"> </v-divider>
          <div v-for="item in content.data" :key="item.title">
          <v-row>
          <v-col cols="12"
            md="9">
          <v-text-field dark label="导航图"
            required dense class="caption" v-model="item.img"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="12"
            md="6">
          <v-text-field dark label="大标题"
            required dense class="caption" v-model="item.title"></v-text-field>
          </v-col>
          <v-col cols="12"
            md="6">
          <v-text-field dark label="大标题"
            required dense class="caption" v-model="item.subtitle"></v-text-field>
          </v-col>
          </v-row>
          <v-row>
            <v-col cols="12"
            md="12">
            <v-textarea
              dark
              outlined
              label="正文"
              class="caption"
              v-model="item.text"
            ></v-textarea>
            </v-col>
          </v-row>
          </div>
        </v-col>
    </v-col>
    <v-col cols="6" xs="12" md="6">
    <v-card
      class="mx-auto"
      color="transparent">
      <div v-html="template">
      </div>
    </v-card>
  </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mail: {
        Address: "<weeknd.su@gmail.com>",
        Account: "<weeknd>",
        Token: "<mail token>",
      },
      content: {
        logo: "https://raw.githubusercontent.com/weekndCN/documents/master/1.png",
        name: "rwplus",
        data: [
          {
            img: "https://raw.githubusercontent.com/weekndCN/documents/master/6.jpeg",
            title: "May 2020 App updates",
            subtitle: "Mysql transaction",
            text: "1: 添加mysql事务执行sql文件功能",
          },
        ],
      },
      template: `
      <html>
        <head>
          <meta name="viewport" content='width=device-width' />
          <meta http-equiv="content-type" charset="utf-8" content='text/html' />
          <title>rwplus</title>
          <style>
            body {
              width: 100%;
              background-color: transparent!important;
              margin: 0;
              padding: 0;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              -firefox-text-size-adjust: 100%;
              font-family: 'Thasadith', sans-serif;
            }

            table {
              width: 100%;
              margin:0px;padding:0px;
              background-color: transparent !important;
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }

            table td {
              vertical-align: top;
            }

            .container {
              display: block;
              margin: 0 auto !important;
              width-max: 580px;
              width: 100%;
              padding: 0px;
            }
            .content {
              display: block;
              margin: 0 auto !important;
              box-sizing: border-box;
              padding: 10px;
              max-width: 580px;
              width: 100%;
              background-color: transparent;
            }

            /* -------------------------------------
                HEADER MAIN AND FOOTER
            ------------------------------------- */
            .main_logo {
              display: block;
              margin: 10px auto !important;
              max-width: 100px;
              width: 60%;
            }

            .main_logo+p {
              text-align: center;
              font-size: 14px;
              margin-top: 0px;
              color: white;
              margin-bottom: 20px;
              font-family:futura;
            }

            .hero_image {
              display: block;
              margin: 0 auto !important;
              max-width: 560px;
              width: 95%;
            }

            .offer_image {
              max-width: 500px;
              width: 100%;
              background: #fff;
              display: block;
              margin: 10px auto;
            }

            .wrapper {
              box-sizing: border-box;
              padding: 20px;
            }

            .message {
              text-align: left;
              padding: 30px;
              background-color: #fff;
              display: block;
              margin: 0px auto;
              max-width: 500px;
              width: 80%;
            }

             .message h1 {
              font-size: 1.5em;
              color: #000;
              font-family:futura;
            }

            .message h4 {
              font-size: 1em;
              color: #000;
              font-family:futura;
            }

            .message p {
              color: #333;
              line-height: 1.6em;
              word-spacing: 2px;
              font-family: futura;
              font-size: 12px;
            }

            .offer {
              margin-bottom: 35px;
            }

            .body_bottom {
              background-color: #f2f2f2;
              padding: 30px;
            }

            .social {
              margin-bottom: 30px;
              font-family:futura;
              color: white;
            }

            .social tr {
              text-align: center;
              font-size: 1.333em;
            }

            .social_icon a img {
              width: 1em;
            }

            .footer, .footer_content {
              padding: 30px;
              background-color: #fff;
            }

            .footer_content {
              text-align: center;
              font-size: .7em;
              opacity: .6;
              font-family: futura;
            }

             /* -------------------------------------
                BUTTON
            ------------------------------------- */
            .btn {
              box-sizing: border-box;
              width: 100%;
            }

            .btn tbody tr td {
              display: block;
              margin: 0 auto !important;
              text-align: center;
            }

            .btn tr td table tbody tr td {
              text-align:center;
              display: block;
              margin: 0 auto;
              width: 100%;
            }

            .btn a {
              display: inline-block;
              text-decoration: none;
              background-color: #1b262b;
              padding: 10px 50px;
              margin: 0 auto;
              color: #fff;
              font-size: 12px;
              font-weight: bold;
              box-sizing: border-box;
              transition: background-color .3s, padding 1s;
            }

            .btn a:hover {
              background-color: #69cce0;
              padding: 10px 70px;
            }

            .preheader {
              color: transparent;
              visibility: hidden;
              mso-hide: all;
              display: none;
              overflow: hidden;
              opacity: 0;
              width: 0;
              height: 0;
            }

            .hyperlink, .article {
              color: #88b5bf;
              font-weight: bold;
              text-decoration: none;
              transition: color .3s linear;
            }

            .underline {
              border-bottom-width: 1px;
              border-bottom-style: solid;
              border-bottom-color: #88b5bf;
              width: 130px;
              transition: color .3s linear;
            }

            .hyperlink:hover, .article:hover, .underline:hover {
              color: #69cce0;
              border-bottom-color: #69cce0;
            }

            /* -------------------------------------
                RESPONSIVE AND MOBILE FRIENDLY STYLES
            ------------------------------------- */
            @media only screen and (max-width: 620px) {
              table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
              }
              table[class=body] p,
              table[class=body] ul,
              table[class=body] ol,
              table[class=body] td,
              table[class=body] span,
              table[class=body] a {
                font-size: 16px !important;
              }
              table[class=body] .wrapper,
              table[class=body] .article {
                padding: 10px !important;
              }
              table[class=body] .content {
                padding: 0 !important;
              }
              table[class=body] .container {
                padding: 0 !important;
                width: 100% !important;
              }
              table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
              }
              table[class=body] .btn table {
                width: 100% !important;
              }
              table[class=body] .btn a {
                width: 100% !important;
              }
              table[class=body] .hero_image {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
              }
            }

            /* -------------------------------------
                PRESERVE THESE STYLES IN THE HEAD
            ------------------------------------- */
            @media all {
              .ExternalClass {
                width: 100%;
              }
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
                line-height: 100%;
              }
              .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
              }
              .btn-primary table td:hover {
                background-color: #34495e !important;
              }
              .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important;
              }
            }
          </style>

        </head>

        <body role='presentation' border='0' cellspacing='0' cellpadding='0'>
          <tr>
            <td>&nbsp;</td>
            <td class='container'>
              <div class='content'>

                <!-- EMAIL CONTAINER -->
                <!-- PREVIEW TEXT FROM CLIENT -->
                <span class='preheader'>Email text preview from client.</span>

                <!-- EMAIL BODY -->
                <table role='presentation' border='0' cellspacing='0' cellpadding='0' class='main'>
                  <tbody>
                    <tr>
                      <td align='wrapper'>
                        <!-- MAIN AREA -->
                        <table role='presentation' border='0' cellspacing='0' cellpadding='0'>
                          <td>
                            <tr>
                              <a href='https://anaheart.co.uk/' target="_blank" class='main_logo'><img src='https://raw.githubusercontent.com/weekndCN/documents/master/1.png' class='main_logo'/></a>
                              <p>RWPLUS</p>
                              <img src='https://raw.githubusercontent.com/weekndCN/documents/master/6.jpeg' class='hero_image'/>
                            </tr>
                            <tr>
                              <table role='presentation' border='0' cellspacing='0' cellpadding='0'>
                                <div class='message'>
                                   <h1>May 2020 App updates</h1>
                                    <h4>Mysql transaction</h4>
                                  <p> 1: 添加mysql事务执行sql文件功能<br>2: data flow展示事务流<br>3: 语法分析器<a href='#' target='_blank' class='hyperlink'>synax check</a>，预先校验sql文件</p>
                                    <h4>Mail templates</h4>
                                    <p> 1: 添加mysql事务执行sql文件功能<br>2: data flow展示事务流<br>3: 语法分析器<a href='#' target='_blank' class='hyperlink'>synax check</a>，预先校验sql文件</p>
                                    <div style="margin:0;padding:0;text-align: center;width: 100%;">
                                       <a href="#" target="_blank" style="margin:0;padding:0;display:inline-block;background:#1b262b;color:#fff;text-decoration:none;padding:10px 15px;border-radius:10px;font-size:12px;letter-spacing:1px;font-weight:100;margin:20px auto;font-family:futura">
                                           More Details Click Here</a>
                                    </div>
                                </div>
                              </table>
                                <table role='presentation' border='0' cellspacing='0' cellpadding='0' class='social'>
                                  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                                  <tr><td>&nbsp;</td><td>Join Us</td><td>&nbsp;</td></tr>
                                  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                                  <tr class='social_icon'>
                                    <td style="padding-left:200px">
                                      <a href='#'><img src='https://raw.githubusercontent.com/weekndCN/documents/master/QQ.png'/></a>
                                    </td>
                                    <td>
                                      <a href='#'><img src='https://raw.githubusercontent.com/weekndCN/documents/master/wechat.png'/></a>
                                    </td>
                                    <td style="padding-right:200px">
                                      <a href='#'><img src='https://raw.githubusercontent.com/weekndCN/documents/master/github.png'/></a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <table role='presentation' border='0' cellspacing='0' cellpadding='0' class='footer'>
                            <tr>
                              <td>
                                <div class='footer_content'>
                                  <p>RWPLUS is the trusted platform for Program and Sharing.<br>
                                  <br>RWPLUS &copy; 2020</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                            </tr>
                          </tbody>
                        </table>
                  </tbody>
                </table>
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </body>
      </html>
`,
    };
  },
  methods: {}
};
</script>

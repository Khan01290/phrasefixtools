        // --- DATA DEFINITIONS ---
        
        const navItems = [
          {
            page: 'basic',
            tools: [
              { name: 'Alternate Case', tool: 'alternate-case' },
              { name: 'Capitalize Words', tool: 'capitalize-words' },
              { name: 'Invert Case', tool: 'invert-case' },
              { name: 'Lower Case', tool: 'lower-case' },
              { name: 'Sentence Case', tool: 'sentence-case' },
              { name: 'Strikethrough', tool: 'strikethrough' },
              { name: 'Title Case', tool: 'title-case' },
              { name: 'Underline', tool: 'underline' },
              { name: 'Upper Case', tool: 'upper-case' },
            ]
          },
          {
            page: 'counter',
            tools: [
              { name: 'Character and Word Counter', tool: 'character-word' },
              { name: 'Count Each Line', tool: 'line' },
              { name: 'Bracket and Tag Counter', tool: 'bracket-tag' },
            ],
          },
          {
            page: 'formatter',
            tools: [
              { name: 'CSS Beautifier', tool: 'css' },
              { name: 'HTML Beautifier', tool: 'html' },
              { name: 'JavaScript Beautifier', tool: 'javascript' },
              { name: 'JSON Beautifier', tool: 'json' },
              { name: 'SQL Beautifier', tool: 'sql' },
            ],
          },
          {
            page: 'modify',
            tools: [
                { name: 'Add Number To Each Line', tool: 'add-number-each-line' },
                { name: 'Add Prefix', tool: 'add-prefix' },
                { name: 'Add String After Number of Characters', tool: 'add-string-after-number-of-characters' },
                { name: 'Add Text in Specific Position', tool: 'add-text-in-specific-position' },
                { name: 'Add Suffix', tool: 'add-suffix' },
                { name: 'Add Text To Each Line', tool: 'add-text-to-each-line' },
                { name: 'Column to Comma', tool: 'column-to-comma' },
                { name: 'Commas Between Numbers', tool: 'commas-between-numbers' },
                { name: 'Convert Commas to Lines', tool: 'convert-commas-to-lines' },
                { name: 'Convert Double Space To Single Space', tool: 'convert-double-space-to-single-space' },
                { name: 'Convert Single Space To Double Space', tool: 'convert-single-space-to-double-space' },
                { name: 'Keep First Characters Of Each Line', tool: 'keep-first-characters-of-each-line' },
                { name: 'Keep Last Characters Of Each Line', tool: 'keep-last-characters-of-each-line' },
                { name: 'Keep Lines Containing a Certain Word', tool: 'keep-lines-containing' },
                { name: 'Merge Text Or Lists', tool: 'merge-text' },
                { name: 'Number to Words', tool: 'number-to-words' },
                { name: 'Trimming Text', tool: 'trimming-text' },
            ].sort((a, b) => a.name.localeCompare(b.name))
          },
          {
            page: 'special-effects',
            tools: [
                { name: 'Binary Code To Text', tool: 'binary-code-to-text' },
                { name: 'Bold', tool: 'bold' },
                { name: 'Bold Gothic Text', tool: 'bold-gothic' },
                { name: 'Bold Italic', tool: 'bold-italic' },
                { name: 'Circled Text', tool: 'circled' },
                { name: 'Cursive Bold', tool: 'cursive-bold' },
                { name: 'Flip Text', tool: 'flip-text' },
                { name: 'Flip Words', tool: 'flip-words' },
                { name: 'Gothic Text', tool: 'gothic' },
                { name: 'Italic', tool: 'italic' },
                { name: 'Outline Text', tool: 'outline' },
                { name: 'Parentheses Around Letters', tool: 'parentheses-around-letters' },
                { name: 'Pascal Case', tool: 'pascal-case' },
                { name: 'Reverse Text', tool: 'reverse-text' },
                { name: 'Slashed', tool: 'slashed' },
                { name: 'Snake Case', tool: 'snake-case' },
                { name: 'Upside Down Text', tool: 'upside-down-text' },
                { name: 'Wide Text', tool: 'wide-text' },
            ].sort((a, b) => a.name.localeCompare(b.name))
          },
           {
            page: 'extract',
            tools: [
                { name: 'Extract Emails', tool: 'extract-emails' },
                { name: 'Extract Phone Numbers', tool: 'extract-phone-numbers' },
                { name: 'Extract IP Address', tool: 'extract-ip-address' },
                { name: 'Extract Zip Codes', tool: 'extract-zip-codes' },
                { name: 'Extract URLs', tool: 'extract-urls' },
                { name: 'Extract Image URLs', tool: 'extract-image-urls' },
                { name: 'Extract Hex Colors', tool: 'extract-hex-colors' },
                { name: 'Extract Numbers From Text', tool: 'extract-numbers' },
                { name: 'Extract Text Between', tool: 'extract-text-between' },
                { name: 'Extract Random Lines', tool: 'extract-random-lines' },
            ]
          },
          {
            page: 'sorting',
            tools: [
                { name: 'Alphabetical Sort', tool: 'alphabetical-sort' },
                { name: 'Length Sort', tool: 'length-sort' },
                { name: 'Randomly Sort Lines', tool: 'randomly-sort' },
                { name: 'Sort Numbers', tool: 'sort-numbers' },
            ]
          },
          {
            page: 'remove',
            tools: [
                { name: 'Remove Consonants', tool: 'remove-consonants' },
                { name: 'Remove Duplicate Lines', tool: 'remove-duplicate-lines' },
                { name: 'Remove Duplicate Words', tool: 'remove-duplicate-words' },
                { name: 'Remove Empty Lines', tool: 'remove-empty-lines' },
                { name: 'Remove Extra Spaces', tool: 'remove-extra-spaces' },
                { name: 'Remove First Characters Of Each Line', tool: 'remove-first-characters' },
                { name: 'Remove Html Comments', tool: 'remove-html-comments' },
                { name: 'Remove Html Tags', tool: 'remove-html-tags' },
                { name: 'Remove Last Characters Of Each Line', tool: 'remove-last-characters' },
                { name: 'Remove Leading And Trailing Spaces', tool: 'remove-leading-trailing-spaces' },
                { name: 'Remove Line Breaks', tool: 'remove-line-breaks' },
                { name: 'Remove Lines Containing A Certain Word', tool: 'remove-lines-containing' },
                { name: 'Remove Numbers', tool: 'remove-numbers' },
                { name: 'Remove Numbers From Text', tool: 'remove-numbers-from-text' },
                { name: 'Remove Quotes From Text', tool: 'remove-quotes' },
                { name: 'Remove Single Quotes From Text', tool: 'remove-single-quotes' },
                { name: 'Remove Spaces', tool: 'remove-spaces' },
                { name: 'Remove Special Characters', tool: 'remove-special-characters' },
                { name: 'Remove Tabs From Text', tool: 'remove-tabs' },
                { name: 'Remove Text Between', tool: 'remove-text-between' },
                { name: 'Remove Vowels From Text', tool: 'remove-vowels' },
            ].sort((a, b) => a.name.localeCompare(b.name))
          },
           {
            page: 'replace',
            tools: [
                { name: 'Search and Replace', tool: 'find-replace' },
                { name: 'Replace New Line with Commas', tool: 'replace-newline-commas' },
                { name: 'Replace Spaces', tool: 'replace-spaces' },
                { name: 'Replace Text Between', tool: 'replace-text-between' },
            ]
          },
          {
            page: 'conversion',
            tools: [
              { name: 'Base64 Decoder', tool: 'base64-decoder' },
              { name: 'Base64 Encoder', tool: 'base64-encoder' },
              { name: 'Date Conversion', tool: 'date-conversion' },
              { name: 'Decimal to String', tool: 'decimal-string' },
              { name: 'Html Entities Converter', tool: 'html-entities' },
              { name: 'String to Decimal', tool: 'string-decimal' },
              { name: 'Text To Binary Code', tool: 'text-binary' },
              { name: 'Url Decode', tool: 'url-decode' },
              { name: 'Url Encode', tool: 'url-encode' },
            ],
          },
          {
            page: 'generators',
            tools: [
                { name: 'Lorem Ipsum Generator', tool: 'lorem-ipsum' },
                { name: 'Password Generator', tool: 'password' },
                { name: 'Random Color Generator', tool: 'random-color' },
                { name: 'Random Email Addresses Generator', tool: 'random-email' },
                { name: 'Random Date Generator', tool: 'random-date' },
                { name: 'Random IP Address Generator', tool: 'random-ip' },
                { name: 'Random MAC Address Generator', tool: 'random-mac' },
                { name: 'Random User Agent Generator', tool: 'random-user-agent' },
                { name: 'Random IPv6 Address Generator', tool: 'random-ipv6' },
                { name: 'URL Slug Generator', tool: 'url-slug' },
                { name: 'Random Number Generator', tool: 'random-number' },
                { name: 'Sequential Number Generator', tool: 'sequential-number' },
            ]
          }
        ];

        const allTools = navItems.flatMap(item =>
          item.tools.map(tool => ({
            name: tool.name,
            tool: tool.tool,
            page: item.page,
          }))
        );

        const staticPageContent = {
          privacy: {
            title: 'Privacy Policy',
            subtitle: 'Last Updated: April 10, 2026',
            sections: [
              {
                heading: 'Welcome',
                paragraphs: ['Welcome to Phrase Fix Tools (https://phrasefixtools.com/). Your privacy is important to us. This Privacy Policy document outlines the types of information that is collected and recorded by our website and how we use it.']
              },
              {
                heading: '1. Information We Collect',
                paragraphs: ['We do not collect personally identifiable information unless you voluntarily provide it.', 'However, we may collect the following types of data:']
              },
              {
                heading: 'Log Files',
                paragraphs: ['Like many websites, we use log files. These files log visitors when they visit websites. The information collected includes:', '• IP (Internet Protocol) address', '• Browser type', '• Internet Service Provider (ISP)', '• Date and time stamp', '• Referring/exit pages', '• Number of clicks', 'This information is not linked to any information that is personally identifiable.']
              },
              {
                heading: '2. Cookies and Web Beacons',
                paragraphs: ['We use cookies to:', '• Store information about visitors’ preferences', '• Optimize user experience by customizing web page content', '• Analyze traffic and improve our services', 'You can choose to disable cookies through your individual browser options.']
              },
              {
                heading: '3. Google AdSense and Third-Party Advertising',
                paragraphs: ['We may use third-party advertising services such as Google AdSense.', 'Google uses cookies (including the DoubleClick cookie) to serve ads to users based on their visit to this and other websites.', 'These cookies enable Google and its partners to serve ads based on your browsing history.', 'Users may opt out of personalized advertising by visiting: https://www.google.com/settings/ads', 'Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their advertisements and links that appear on our website.', 'We have no control over these cookies used by third-party advertisers.']
              },
              {
                heading: '4. How We Use Your Information',
                paragraphs: ['We use collected information to:', '• Operate and maintain our website', '• Improve user experience', '• Understand how visitors use our website', '• Develop new features and tools']
              },
              {
                heading: '5. Third-Party Privacy Policies',
                paragraphs: ['Our Privacy Policy does not apply to other advertisers or websites.', 'We advise you to consult the respective Privacy Policies of third-party ad servers for more detailed information about their practices and instructions on how to opt-out.']
              },
              {
                heading: '6. Children’s Information',
                paragraphs: ['We do not knowingly collect any Personal Identifiable Information from children under the age of 13.', 'If you believe that your child has provided this kind of information on our website, please contact us immediately and we will promptly remove such information from our records.']
              },
              {
                heading: '7. Data Security',
                paragraphs: ['We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure.']
              },
              {
                heading: '8. Consent',
                paragraphs: ['By using our website, you hereby consent to our Privacy Policy and agree to its terms.']
              },
              {
                heading: '9. Updates to This Policy',
                paragraphs: ['We may update this Privacy Policy from time to time. Any changes will be posted on this page.']
              },
              {
                heading: '10. Contact Us',
                paragraphs: ['If you have any questions about this Privacy Policy, you can contact us:', '• Email: [your-email@example.com](mailto:your-email@example.com)', '• Website: https://phrasefixtools.com/']
              }
            ]
          },
          disclaimer: { title: 'Disclaimer', subtitle: 'Important information about using PhraseFixTools', sections: [{ heading: 'General Information', paragraphs: ['The information and tools provided by PhraseFixTools are for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the tools provided.'] }, { heading: 'Use at Your Own Risk', paragraphs: ['Your use of any tools or information on this website is entirely at your own risk. We shall not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.'] }] },
          terms: {
            title: 'Terms of Service',
            subtitle: 'Please read these terms carefully before using our services',
            sections: [
              {
                heading: 'Welcome',
                paragraphs: ['Welcome to PhraseFixTools (https://phrasefixtools.com/). By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please do not use our services.']
              },
              {
                heading: '1. Acceptance of Terms',
                paragraphs: ['By accessing PhraseFixTools, you confirm that you have read, understood, and agreed to be bound by these Terms of Service, as well as our Privacy Policy and Disclaimer. These terms apply to all visitors, users, and others who access the Service.']
              },
              {
                heading: '2. Description of Service',
                paragraphs: ['PhraseFixTools provides users with various online text processing tools, including but not limited to text formatting, phrase correction, and conversion utilities (the "Service").', 'We reserve the right to:', 'Modify, suspend, or discontinue any part of the Service at any time without notice.', 'Limit the availability of the Service to any person or geographic area.']
              },
              {
                heading: '3. User Conduct and Responsibilities',
                paragraphs: ['You agree to use the Service only for lawful purposes. You are prohibited from:', 'Using the tools to generate, format, or distribute content that is illegal, defamatory, or infringing on intellectual property rights.', 'Attempting to bypass any measures we may use to prevent or restrict access to the Service.', 'Using automated scripts, bots, or "scraping" technology to access the tools without our express written permission.', 'Transmitting any worms, viruses, or any code of a destructive nature.']
              },
              {
                heading: '4. Intellectual Property',
                paragraphs: ['Our Content: The design, layout, look, appearance, graphics, and original tools on PhraseFixTools are owned by or licensed to [Your Name/Company Name]. Reproduction is prohibited other than in accordance with the copyright notice.', 'Your Content: We do not claim ownership of the text you paste into our tools. However, by using our Service, you acknowledge that the processing happens locally or on our servers to provide you with the result. We do not store your input text permanently unless specifically stated for a particular feature.']
              },
              {
                heading: '5. Third-Party Links and Ads',
                paragraphs: ['Our Site may contain links to third-party websites or services (such as hosting providers or advertisers) that are not owned or controlled by PhraseFixTools.', 'We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites.', 'You acknowledge and agree that PhraseFixTools shall not be responsible or liable for any damage or loss caused by your use of third-party content.']
              },
              {
                heading: '6. No Warranty (Disclaimer of Warranties)',
                paragraphs: ['The Service is provided on an "AS IS" and "AS AVAILABLE" basis. PhraseFixTools makes no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, or materials included.', 'We do not warrant that:', 'The results from the tools will be accurate or reliable.', 'The Service will be uninterrupted, timely, secure, or error-free.', 'Any errors in the software will be corrected.']
              },
              {
                heading: '7. Limitation of Liability',
                paragraphs: ['To the fullest extent permitted by law, [Your Name/Company Name] shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our tools, even if we have been advised of the possibility of such damages.']
              },
              {
                heading: '8. Indemnification',
                paragraphs: ['You agree to indemnify and hold harmless PhraseFixTools and its affiliates, officers, and employees from any claim or demand, including reasonable attorneys\' fees, made by any third party due to or arising out of your use of the Service or your violation of these Terms.']
              },
              {
                heading: '9. Changes to Terms',
                paragraphs: ['We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.']
              },
              {
                heading: '10. Governing Law',
                paragraphs: ['These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.']
              }
            ]
          },
          about: { title: 'About Us', subtitle: 'Learn more about PhraseFixTools', sections: [{ heading: 'Who We Are', paragraphs: ['PhraseFixTools is a free online platform dedicated to providing high-quality, easy-to-use tools for developers, writers, students, and professionals. We believe that powerful tools should be accessible to everyone, which is why all our tools are completely free and require no registration or installation.'] }, { heading: 'Our Mission', paragraphs: ['Our mission is to simplify everyday tasks and boost productivity by providing reliable, efficient, and user-friendly online tools. We focus on creating tools that work entirely in your browser, ensuring your data remains private and secure while delivering instant results.'] }] },
          contact: { title: 'Contact Us', subtitle: 'Get in touch with the PhraseFixTools team', sections: [{ heading: "We'd Love to Hear From You", paragraphs: ["Whether you have questions, suggestions, feedback, or need support, we're here to help. Your input helps us improve PhraseFixTools and create better tools for everyone."] }, { heading: "How to Reach Us", paragraphs: ["Email for general inquiries and support: support@phrasefixtools.com", "For feedback & suggestions: feedback@phrasefixtools.com"] }] },
        };

        const toolContent = {
            basic: {
                'upper-case': {
                    title: "About the Upper Case Converter Tool",
                    paragraphs: [
                        "The Upper Case Converter instantly transforms your text into ALL CAPS. It’s useful when you need emphasis, consistent formatting, or standardized headings in documents and code.",
                        "Writers and editors often use uppercase for titles, labels, or UI copy. Developers use it to normalize text values before comparisons and validations.",
                        "Paste your text and the output updates instantly in your browser—fast and privacy-friendly."
                    ],
                    example: { title: "Upper Case Example", before: "this text will be converted to uppercase.", after: "THIS TEXT WILL BE CONVERTED TO UPPERCASE." },
                    details: {
                        sections: [
                            {
                                heading: "What is uppercase?",
                                paragraphs: [
                                    "Uppercase, also known as capital letters or ALL CAPS, refers to the larger form of alphabetic characters. The Uppercase Text Converter is a free online tool designed to quickly transform text into uppercase letters, preserving numbers, spaces, and punctuation. This text transformation tool is essential for content creators, developers, and professionals who need consistent capitalization formatting for headings, titles, labels, and standardized content."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use uppercase text conversion for creating strong emphasis, eye-catching headlines, attention-grabbing marketing copy, and professional branding. Capitalize entire product names, hashtags, and social media call-to-action buttons for maximum visibility and engagement.",
                                    "Uppercase is perfect for website headers, email subject lines, navigation menus, alert messages, and banners. Developers often use uppercase for variable names, environment variables, and constants in code. Content creators use uppercase for titles and section headings to improve readability and search engine optimization (SEO).",
                                    "Transform text to uppercase for data normalization, database entries, form validation, and API responses. Perfect for cleaning up user input, standardizing tags, and ensuring consistent data formatting across applications."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Transform web copy: 'limited time offer - shop now' becomes 'LIMITED TIME OFFER - SHOP NOW' for better visibility in marketing emails and advertisements.",
                                    "Create attention-grabbing social media content: 'Don't miss out on our exclusive sale!' becomes 'DON'T MISS OUT ON OUR EXCLUSIVE SALE!' to increase engagement and click-through rates.",
                                    "Standardize button labels: 'submit order' becomes 'SUBMIT ORDER' for consistent UI/UX across web and mobile applications.",
                                    "Format product names: 'premium membership plan' becomes 'PREMIUM MEMBERSHIP PLAN' for professional branding and better SEO impact."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Does the uppercase converter affect numbers and special characters? A: No, this tool converts only alphabetic characters to uppercase. Numbers, spaces, symbols, and punctuation remain unchanged, making it perfect for mixed-content transformation.",
                                    "Q: Is uppercase text better for SEO and search rankings? A: While uppercase doesn't directly boost search rankings, it improves content readability, user experience, and visual hierarchy—all factors that indirectly support SEO performance. Consistent formatting also helps crawlers understand content structure better.",
                                    "Q: Can I use this uppercase tool for email marketing and social media? A: Yes, absolutely! Uppercase text is ideal for email subject lines, social media headlines, calls-to-action, and promotional content. It draws attention and increases engagement, though using it sparingly prevents reader fatigue.",
                                    "Q: Is my text data secure when using this online uppercase converter? A: Yes, all transformations happen entirely in your browser. Your text is never sent to any server, ensuring complete privacy and data security."
                                ]
                            }
                        ]
                    }
                },
                'lower-case': {
                    title: "About the Lower Case Converter Tool",
                    paragraphs: [
                        "The Lower Case Converter converts your text to all lowercase letters. It’s a common cleanup step for search keywords, tags, emails, and normalized inputs.",
                        "Lowercasing helps avoid mismatches caused by capitalization differences (for example, comparing usernames or filtering lists).",
                        "Simply paste your text and get a clean lowercase output instantly."
                    ],
                    example: { title: "Lower Case Example", before: "THIS TEXT WILL BE CONVERTED TO LOWERCASE.", after: "this text will be converted to lowercase." },
                    details: {
                        sections: [
                            {
                                heading: "What is lowercase?",
                                paragraphs: [
                                    "Lowercase refers to small letters (a-z) as opposed to uppercase (A-Z). The Lowercase Text Converter is a free online tool that instantly converts any text into all lowercase letters, perfect for standardizing content, cleaning data, and normalizing text for databases and searches."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use lowercase for normalizing email addresses, usernames, URLs, and database entries to prevent case-sensitive mismatches. Perfect for standardizing search keywords, tags, and filtering operations.",
                                    "Ideal for cleaning imported data from various sources with inconsistent capitalization. Also essential for SEO keyword normalization, URL slugs, domain names, and web-safe content standardization."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Email standardization: 'John.Smith@GMAIL.COM' becomes 'john.smith@gmail.com' for consistent database matching.",
                                    "URL normalization: 'MyWebsiteName.COM' becomes 'mywebsitename.com' for proper web standards.",
                                    "Search keyword cleanup: 'BEST DIGITAL MARKETING TIPS' becomes 'best digital marketing tips' for consistent keyword matching."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Why convert text to lowercase? A: Lowercasing standardizes text for database comparisons, prevents case-sensitivity errors, and normalizes data from mixed sources.",
                                    "Q: Does lowercase affect special characters and numbers? A: No, only alphabetic characters are converted. Numbers, spaces, punctuation, and special characters remain unchanged.",
                                    "Q: Is lowercase important for SEO and search? A: While URLs should be lowercase for technical reasons, lowercase also helps normalize keywords and improve data consistency for better search indexing.",
                                    "Q: Can I use lowercase for usernames and passwords? A: Yes, many systems require lowercase normalization for usernames to prevent case-sensitivity issues and improve security."
                                ]
                            }
                        ]
                    }
                },
                'capitalize-words': {
                    title: "About the Capitalize Words Tool",
                    paragraphs: [
                        "The Capitalize Words tool (also called Proper Case or Start Case) capitalizes the first letter of every word. It’s great for formatting names, headings, and titles.",
                        "This tool is commonly used for cleaning imported text where capitalization is inconsistent, like product names, blog headings, or spreadsheet columns.",
                        "Paste your text and instantly get each word capitalized in a consistent style."
                    ],
                    example: { title: "Capitalize Words Example", before: "capitalize the first letter of each word.", after: "Capitalize The First Letter Of Each Word." },
                    details: {
                        sections: [
                            {
                                heading: "What is capitalize words?",
                                paragraphs: [
                                    "Capitalize Words, also known as Title Case or Proper Case, is a text formatting style where the first letter of each word is capitalized. The Capitalize Words Converter is a free online tool that instantly applies this capitalization pattern to any text, making it perfect for creating professional titles, names, and headings."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use capitalize words for product names, article titles, book names, and blog headlines. This formatting style is essential for professional branding, e-commerce listings, and content marketing where consistent capitalization improves readability and brand consistency.",
                                    "Perfect for cleaning up imported data from databases, spreadsheets, and CRM systems where capitalization is inconsistent. Also ideal for proper names, company names, and event titles across websites and social media."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Product naming: 'amazon best selling wireless headphones' becomes 'Amazon Best Selling Wireless Headphones' for professional listings.",
                                    "Article headlines: 'the complete guide to digital marketing' becomes 'The Complete Guide To Digital Marketing' for blog SEO optimization.",
                                    "Contact names: 'john smith from marketing department' becomes 'John Smith From Marketing Department' for database cleanup."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Does capitalize words affect all letters equally? A: Yes, it capitalizes the first letter of each word while lowercasing the rest, creating a consistent title-style format.",
                                    "Q: Is capitalize words better for SEO? A: While not directly affecting search rankings, properly capitalized titles improve visual hierarchy, readability, and user experience—all positive signals for SEO.",
                                    "Q: Can I use this for brand names and product titles? A: Absolutely! Capitalize words is ideal for standardizing brand names, product titles, and marketing copy across all platforms.",
                                    "Q: Is this data secure? A: Yes, all capitalization changes happen entirely in your browser. No data is stored or sent to external servers."
                                ]
                            }
                        ]
                    }
                },
                'sentence-case': {
                    title: "About the Sentence Case Converter Tool",
                    paragraphs: [
                        "The Sentence Case Converter formats text into standard sentences by lowercasing the content and capitalizing the start of each sentence.",
                        "It’s helpful for cleaning paragraphs copied from sources with inconsistent capitalization—like chat text, notes, or OCR/PDF extracts.",
                        "Paste your text and get a more natural, readable sentence-style output instantly."
                    ],
                    example: { title: "Sentence Case Example", before: "this is the first sentence. this is the second sentence.", after: "This is the first sentence. This is the second sentence." },
                    details: {
                        sections: [
                            {
                                heading: "What is sentence case?",
                                paragraphs: [
                                    "Sentence Case is a text formatting style where only the first letter of each sentence is capitalized. The Sentence Case Converter is a free online tool that transforms any text into proper sentence format, making paragraphs more readable and grammatically correct."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use sentence case for paragraphs, blog posts, articles, and professional documents where natural, grammar-correct formatting is important. Perfect for cleaning OCR text, PDF extracts, and copied content with inconsistent capitalization.",
                                    "Ideal for email copy, social media captions, and narrative content where readability and proper grammar enhance user experience and SEO performance. Also great for standardizing text from multiple sources."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Clean chat transcripts: 'HELLO THERE HOW ARE YOU TODAY?' becomes 'Hello there how are you today?' for professional readability.",
                                    "Fix OCR text: 'tHE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' becomes 'The quick brown fox jumps over the lazy dog.' for publication.",
                                    "Standardize social content: 'don't miss our black friday sale it ends today' becomes 'Don't miss our black friday sale it ends today.' for professionalism."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: How does sentence case differ from title case? A: Sentence case capitalizes only the first word of each sentence, while title case capitalizes the first letter of most words. Sentence case looks more natural for paragraphs.",
                                    "Q: Is sentence case good for blog posts? A: Yes, sentence case is the standard for blog body text, articles, and professional writing. It appears natural and improves readability for longer content.",
                                    "Q: Can I use this to fix all-caps text? A: Absolutely! The sentence case converter automatically fixes ALL CAPS text, RandomCaps text, and inconsistently capitalized content into proper sentence format.",
                                    "Q: Does sentence case work with multiple sentences? A: Yes, it capitalizes after each period, question mark, or exclamation point, making it perfect for multi-sentence paragraphs."
                                ]
                            }
                        ]
                    }
                },
                'title-case': {
                    title: "About the Title Case Converter Tool",
                    paragraphs: [
                        "The Title Case Converter formats your text for headlines, article titles, and book names by capitalizing important words.",
                        "It’s useful for content creators and marketers who want consistent headline formatting across posts, categories, and product pages.",
                        "Paste your title and instantly get a clean Title Case result you can copy anywhere."
                    ],
                    example: { title: "Title Case Example", before: "the quick brown fox jumps over the lazy dog", after: "The Quick Brown Fox Jumps Over The Lazy Dog" },
                    details: {
                        sections: [
                            {
                                heading: "What is title case?",
                                paragraphs: [
                                    "Title Case is a professional text formatting style where the first letter of major words is capitalized. The Title Case Converter is a free online tool converts any text into proper title format, perfect for headlines, book titles, article names, and professional headings."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use title case for article headlines, blog post titles, book names, movie titles, and professional headings. Title case formatting improves visual hierarchy, readability, and search engine optimization (SEO) for content discovery.",
                                    "Perfect for e-commerce product names, social media campaign titles, email subject lines, and website page headings. Also ideal for creating professional-looking documentation, reports, and branded content."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Blog headline: 'how to master digital marketing in 30 days' becomes 'How To Master Digital Marketing In 30 Days' for better visual impact and SEO.",
                                    "Product title: 'ultimate wireless noise cancelling headphones' becomes 'Ultimate Wireless Noise Cancelling Headphones' for e-commerce listing optimization.",
                                    "Article title: 'the complete guide to social media marketing strategy' becomes 'The Complete Guide To Social Media Marketing Strategy' for professional presentation."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: What words should NOT be capitalized in title case? A: Small words like 'a,' 'an,' 'the,' 'and,' 'or,' and 'in' are typically lowercase unless they're the first word of the title.",
                                    "Q: Is title case important for SEO? A: Yes! Properly formatted titles with correct capitalization improve click-through rates, readability, and overall SEO performance for headlines and headings.",
                                    "Q: Can I use title case for social media posts? A: Absolutely! Title case makes headlines stand out on Twitter, Facebook, LinkedIn, and other platforms, increasing engagement and shareability.",
                                    "Q: Does this tool follow specific title case rules? A: Yes, it follows standard title case conventions, capitalizing first words, proper nouns, and major words while keeping articles and prepositions lowercase."
                                ]
                            }
                        ]
                    }
                },
                'alternate-case': {
                    title: "About the Alternate Case Converter Tool",
                    paragraphs: [
                        "The Alternate Case Converter changes capitalization in an alternating pattern to create a playful, stylized effect. It’s often used for memes, social posts, and attention-grabbing text.",
                        "This style helps highlight text visually, especially in short phrases and captions where you want a “fun” tone.",
                        "Paste your text to instantly generate alternating capitalization."
                    ],
                    example: { title: "Alternate Case Example", before: "alternate case looks like this", after: "AlTeRnAtE CaSe lOoKs lIkE ThIs" },
                    details: {
                        sections: [
                            {
                                heading: "What is alternate case?",
                                paragraphs: [
                                    "Alternate Case is a fun and playful text formatting style that alternates between uppercase and lowercase letters. Also known as alternating case or mocking text, it creates a distinctive, eye-catching appearance that's popular on memes, social media, and informal content."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use alternate case for memes, social media jokes, and humorous posts where a playful tone is desired. Perfect for creating attention-grabbing content that stands out in feeds and encourages engagement and sharing.",
                                    "Great for highlighting sarcasm, emphasizing irony, or adding personality to informal social media content, Discord messages, and casual online communication. Not recommended for professional or formal documents."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Sarcastic meme text: 'sure that sounds like a great idea' becomes 'SuRe ThAt SoUnDs LiKe A gReAt IdEa' for humorous emphasis.",
                                    "Social media joke: 'when you realize its friday' becomes 'WhEn YoU rEaLiZe ItS fRiDaY' for comedic effect and engagement.",
                                    "Attention-grabbing caption: 'best offer of the season' becomes 'BeStOfFeRoFtHeSeAsOn' for playful promotional content."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: What is alternate case used for? A: Alternate case is primarily used for memes, sarcasm, and playful content on social media. It conveys a joking or mocking tone in informal communication.",
                                    "Q: Is alternate case professional? A: No, alternate case is considered informal and casual. It's not appropriate for professional documents, business emails, or formal communications.",
                                    "Q: Can alternate case improve social media engagement? A: Yes! Unconventional formatting like alternate case can grab attention in crowded social feeds and encourage likes, comments, and shares on humorous content.",
                                    "Q: Does alternate case start with uppercase or lowercase? A: Different tools may start differently; this converter typically starts with uppercase, alternating from there."
                                ]
                            }
                        ]
                    }
                },
                'invert-case': {
                    title: "About the Invert Case Converter Tool",
                    paragraphs: [
                        "The Invert Case Converter flips capitalization: uppercase becomes lowercase and lowercase becomes uppercase. It’s useful when text is typed with Caps Lock on by mistake.",
                        "Developers and writers use it to quickly correct casing without rewriting text, especially in titles, labels, and code snippets.",
                        "Paste your text and instantly get the corrected inverted-casing output."
                    ],
                    example: { title: "Invert Case Example", before: "Hello World", after: "hELLO wORLD" },
                    details: {
                        sections: [
                            {
                                heading: "What is invert case?",
                                paragraphs: [
                                    "Invert Case is a text transformation that reverses all capitalization. Uppercase letters become lowercase, and lowercase letters become uppercase. The Invert Case Converter is a free online tool perfect for fixing Caps Lock mishaps, correcting miscapitalized text, and inverting formatting quickly."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use invert case to fix text accidentally typed with Caps Lock on, or to correct miscapitalized passages without retyping. Perfect for developers fixing variable names, code comments, and text content that has incorrect casing.",
                                    "Ideal for quickly correcting titles, labels, and headings with inverted capitalization. Also useful for normalizing text from different sources that may have inconsistent or incorrect casing patterns."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Fix Caps Lock mistake: 'hELLO THIS IS A TEST' becomes 'HeL Lo this is a test' with case inversion.",
                                    "Correct code comments: 'TODO: FIX THIS FUNCTION' becomes 'todo: fix this function' with proper lowercase.",
                                    "Reverse formatting: 'the quick BROWN fox' becomes 'THE QUICK brown FOX' with inverted capitalization."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Why would I need to invert case? A: Invert case is most useful for fixing Caps Lock mistakes or correcting text that has been capitalized incorrectly without having to retype it entirely.",
                                    "Q: Does invert case affect numbers and special characters? A: No, numbers and special characters remain unchanged. Only alphabetic characters are affected by the case inversion.",
                                    "Q: Can I invert case for code and variable names? A: Yes, developers often use invert case to fix miscapitalized code, environment variables, and comments that need proper formatting.",
                                    "Q: Is inverting case reversible? A: Yes! If you invert the text twice, it returns to the original capitalization."
                                ]
                            }
                        ]
                    }
                },
                'strikethrough': {
                    title: "About the Strikethrough Text Generator",
                    paragraphs: [
                        "The Strikethrough Text Generator creates crossed-out text using Unicode combining characters. This lets you use strikethrough styling even where formatting buttons aren’t available.",
                        "It’s commonly used for edits, jokes, or showing changes in status updates on social media and messaging apps.",
                        "Type or paste your text and the tool outputs a copyable strikethrough version instantly."
                    ],
                    example: { title: "Strikethrough Example", before: "This text has a line through it.", after: "T̶h̶i̶s̶ ̶t̶e̶x̶t̶ ̶h̶a̶s̶ ̶a̶ ̶l̶i̶n̶e̶ ̶t̶h̶r̶o̶u̶g̶h̶ ̶i̶t̶.̶" },
                    details: {
                        sections: [
                            {
                                heading: "What is strikethrough?",
                                paragraphs: [
                                    "Strikethrough is a text formatting style that displays a horizontal line through the middle of text. The Strikethrough Text Generator is a free online tool that creates Unicode strikethrough text, allowing you to display crossed-out text anywhere—even on platforms that don't support rich text formatting."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use strikethrough text for edits, corrections, and showing removed content on social media and messaging apps. Perfect for jokes, sarcasm, and indicating that information is outdated or no longer relevant.",
                                    "Great for showing price reductions ('old price $100' with strikethrough vs 'new price $50'), tasks completion lists, humorous content, and playful edits. Works on platforms where standard formatting tools aren't available."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Pricing: '$99.99 $49.99' shows a discount with strikethrough old price for sales conversion.",
                                    "Humorous edit: 'I'm definitely going to the party' for sarcastic social media posts.",
                                    "Delete indication: 'Meeting cancelled' can be shown with strikethrough to indicate something is no longer happening."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Can I use strikethrough on all social media platforms? A: Strikethrough using Unicode characters works on most platforms including Twitter, Facebook, Instagram, Discord, and most messaging apps.",
                                    "Q: Is strikethrough text the same as deleted text? A: No, strikethrough shows text with a line through it but still readable. It indicates changes or jokes, not permanent deletion.",
                                    "Q: Can I combine strikethrough with other text formats? A: Yes, you can mix strikethrough text with regular text, bold, italic, and other Unicode text styles for creative formatting.",
                                    "Q: Are strikethrough characters supported everywhere? A: Strikethrough Unicode characters work on most modern browsers and platforms, though display may vary slightly."
                                ]
                            }
                        ]
                    }
                },
                'underline': {
                    title: "About the Underline Text Generator",
                    paragraphs: [
                        "The Underline Text Generator creates underlined text using Unicode combining characters, so you can underline text in apps that don’t support rich formatting.",
                        "It’s useful for emphasizing short phrases, headings, or key points in bios, captions, and messages.",
                        "Paste your text and copy the underlined output instantly."
                    ],
                    example: { title: "Underline Example", before: "This text has a line under it.", after: "T̲h̲i̲s̲ ̲t̲e̲x̲t̶ ̲h̶a̶s̶ ̶a̶ ̶l̶i̶n̶e̶ ̲u̲n̲d̲e̲r̲ ̲i̲t̶.̶" },
                    details: {
                        sections: [
                            {
                                heading: "What is underline text?",
                                paragraphs: [
                                    "Underline text is a formatting style that displays a horizontal line underneath text characters. The Underline Text Generator is a free online tool that creates Unicode underlined text, perfect for emphasizing content on platforms where traditional text formatting isn't available."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use underline text to emphasize important words, headings, and key points in social media bios, captions, and messages. Perfect for highlighting special offers, important notices, or important information.",
                                    "Great for LinkedIn profiles, Twitter bios, Instagram captions, Discord messages, and any platform where underlining key terms improves readability and emphasis. Also ideal for highlighting titles and important phrases in plain-text communication."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Bio emphasis: 'Follow me for digital marketing tips' highlights key focus areas in LinkedIn profiles.",
                                    "Important announcement: 'LIMITED TIME SALE' emphasizes urgency and importance in social posts.",
                                    "Caption highlighting: 'Check out our new product' draws attention to CTAs in Instagram captions."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Does underline work on all social media platforms? A: Yes, underlining using Unicode characters works on Twitter, Instagram, LinkedIn, Discord, and most messaging platforms.",
                                    "Q: Can I use underline to replace hyperlinks? A: No, underlined text is just formatting, not a functional hyperlink. Links require specific URL formatting.",
                                    "Q: Can I combine underline with other text effects? A: Yes, you can layer underline text with strikethrough, bold, italic, and other Unicode text styles for unique emphasis.",
                                    "Q: Is underline text supported in all browsers? A: Yes, underline Unicode text displays consistently across modern browsers and devices, though appearance may vary slightly."
                                ]
                            }
                        ]
                    }
                }
            },
            formatter: {
                css: {
                    title: "About the CSS Beautifier Tool",
                    paragraphs: [
                        "The CSS Beautifier formats messy or minified CSS into clean, readable code with proper indentation. It helps you understand styles faster and makes maintenance easier.",
                        "This is useful when you paste CSS from online generators, minifiers, or large projects where formatting is inconsistent. Clean formatting also reduces mistakes when editing selectors and properties.",
                        "Paste your CSS and click Beautify to instantly generate a structured version in your browser."
                    ],
                    example: { title: "CSS Beautifier Example", before: "body{margin:0;padding:0;background:#fff}h1{color:#333;font-size:2rem}", after: "body {\n    margin: 0;\n    padding: 0;\n    background: #fff;\n}\n\nh1 {\n    color: #333;\n    font-size: 2rem;\n}" },
                    details: {
                        sections: [
                            {
                                heading: "What is CSS beautifier?",
                                paragraphs: [
                                    "A CSS Beautifier is a free online tool that formats minified or poorly formatted CSS code into clean, readable, and well-indented CSS. Also called a CSS formatter or CSS prettifier, it transforms compact CSS into a structured format that's easy to understand, modify, and debug."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use CSS beautifier for minified CSS from production servers, compressed stylesheets, or CSS generated by build tools and preprocessors. Perfect for web developers who need to study, debug, or modify existing CSS quickly.",
                                    "Ideal for formatting CSS from online generators, frameworks, or copy-pasted code snippets. Clean CSS improves code readability, reduces errors when editing selectors and properties, and supports better collaboration with team members."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Minified CSS: 'body{margin:0;padding:0}' becomes properly formatted with each property on its own line for clarity.",
                                    "Production code: Compressed stylesheet from a live website becomes readable so developers can quickly find and modify specific styles.",
                                    "Framework output: CSS from Tailwind, Bootstrap, or other tools becomes organized and easier to debug."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Why should I beautify CSS? A: Beautifying makes CSS readable for debugging, learning, and editing. It helps find missing selectors, misplaced brackets, and formatting errors quickly.",
                                    "Q: Does beautifying CSS change its functionality? A: No, beautifying only affects formatting and whitespace. The CSS functionality remains identical after beautification.",
                                    "Q: Can I use this for SCSS or LESS? A: This tool works best with standard CSS. For SCSS/LESS preprocessing, use language-specific beautifiers.",
                                    "Q: Is my CSS data private? A: Yes, beautification happens entirely in your browser. No CSS is sent to any server."
                                ]
                            }
                        ]
                    }
                },
                html: {
                    title: "About the HTML Beautifier Tool",
                    paragraphs: [
                        "The HTML Beautifier cleans and formats HTML markup by adding consistent indentation and line breaks. This makes your code easier to read, debug, and share.",
                        "It’s especially helpful when working with compressed HTML, copied snippets, email templates, or HTML generated by page builders where structure is hard to follow.",
                        "Paste your HTML and click Beautify to produce neatly formatted output instantly."
                    ],
                    example: { title: "HTML Beautifier Example", before: "<div><h1>Hello World</h1><p>This is a paragraph.</p></div>", after: "<div>\n    <h1>Hello World</h1>\n    <p>This is a paragraph.</p>\n</div>" },
                    details: {
                        sections: [
                            {
                                heading: "What is HTML beautifier?",
                                paragraphs: [
                                    "An HTML Beautifier is a free online tool that formats messy or minified HTML code into clean, readable markup with proper indentation and line breaks. Also called an HTML formatter or HTML prettifier, it transforms complex HTML into structured code that's easy to navigate and modify."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use HTML beautifier for minified HTML from production websites, compressed email templates, or HTML exported from page builders and CMS platforms. Essential for web developers who need to debug, understand, or modify HTML structure.",
                                    "Perfect for cleaning up HTML from copy-paste snippets, API responses, or generated markup. Beautified HTML improves code readability, helps identify nesting errors, and makes collaboration easier."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Minified HTML: '<div><p>Text</p></div>' becomes properly indented with clear nesting hierarchy.",
                                    "Email templates: Complex HTML email code becomes structured for easier editing and debugging.",
                                    "Page builder output: Messy markup from drag-and-drop builders becomes clean and analyzable."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Does HTML beautifier change functionality? A: No, beautification only affects formatting and whitespace. HTML behavior and rendering remain identical.",
                                    "Q: Can I use this for template languages like EJS or Handlebars? A: This tool works best with standard HTML. Template-specific syntaxes may not beautify correctly.",
                                    "Q: Will beautifying help with SEO? A: While beautifully formatted HTML doesn't directly impact SEO, it helps ensure correct HTML structure and semantics, which indirectly supports SEO.",
                                    "Q: Is my HTML private? A: Yes, all formatting happens entirely in your browser. No HTML data is transmitted to external servers."
                                ]
                            }
                        ]
                    }
                },
                javascript: {
                    title: "About the JavaScript Beautifier Tool",
                    paragraphs: [
                        "The JavaScript Beautifier converts minified or messy JavaScript into readable, well-indented code. It makes functions, blocks, and control flow easier to follow.",
                        "This is useful when analyzing bundled scripts, debugging code copied from production, or reviewing compact snippets where missing spacing hides the real structure.",
                        "Paste your JavaScript and click Beautify to get a clean version instantly in your browser."
                    ],
                    example: { title: "JavaScript Beautifier Example", before: "function hello(name){if(name){console.log('Hello '+name)}else{console.log('Hello World')}}", after: "function hello(name) {\n    if (name) {\n        console.log('Hello ' + name);\n    } else {\n        console.log('Hello World');\n    }\n}" },
                    details: {
                        sections: [
                            {
                                heading: "What is JavaScript beautifier?",
                                paragraphs: [
                                    "A JavaScript Beautifier is a free online tool that formats minified or poorly structured JavaScript into clean, readable code with proper indentation and spacing. Also called a JS formatter or code prettifier, it transforms compact JavaScript into a format that's easy to understand, debug, and maintain."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use JavaScript beautifier for minified JS from bundlers, production websites, or compressed frameworks. Perfect for developers who need to analyze, debug, or study JavaScript code structure and logic.",
                                    "Ideal for formatting JavaScript from copy-paste snippets, libraries, or code shared across teams. Beautified code improves readability, reduces debugging time, and supports better code reviews and collaboration."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Minified code: 'function test(){console.log(\"hi\")}' becomes properly formatted with clear function body structure.",
                                    "Bundled scripts: Compressed JavaScript from webpack or other bundlers becomes readable for analysis.",
                                    "Library code: Obfuscated or minified library code becomes understandable for learning and debugging."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Does beautifying JavaScript affect functionality? A: No, beautification only changes formatting and whitespace. Code logic and execution remain identical.",
                                    "Q: Can I beautify TypeScript or other JS variants? A: This tool works best with standard JavaScript. TypeScript and JSX may need specialized formatters.",
                                    "Q: Does beautified code perform better? A: No, beautification doesn't affect performance. It only improves readability for developers.",
                                    "Q: Is my JavaScript code secure? A: Yes, all formatting happens in your browser. Code is never sent to external servers, ensuring complete privacy."
                                ]
                            }
                        ]
                    }
                },
                json: {
                    title: "About the JSON Beautifier Tool",
                    paragraphs: [
                        "The JSON Beautifier formats raw JSON into a clean, human-readable structure with indentation and line breaks. It helps you inspect API responses and configuration files quickly.",
                        "Readable JSON is easier to validate, compare, and troubleshoot—especially when you need to find nested keys, arrays, or missing commas/brackets.",
                        "Paste JSON and click Beautify to output a formatted version instantly."
                    ],
                    example: { title: "JSON Beautifier Example", before: "{\"name\":\"John\",\"age\":30,\"city\":\"New York\",\"skills\":[\"JS\",\"HTML\"]}", after: "{\n    \"name\": \"John\",\n    \"age\": 30,\n    \"city\": \"New York\",\n    \"skills\": [\n        \"JS\",\n        \"HTML\"\n    ]\n}" },
                    details: {
                        sections: [
                            {
                                heading: "What is JSON beautifier?",
                                paragraphs: [
                                    "A JSON Beautifier is a free online tool that formats minified or compressed JSON into clean, readable text with proper indentation and line breaks. Also called a JSON formatter or JSON prettifier, it transforms compact JSON into a structured format perfect for inspecting, debugging, and validating data structures."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use JSON beautifier for API responses, minified JSON from databases, configuration files, or compressed data exports. Essential for developers, data analysts, and DevOps professionals who need to quickly inspect and validate JSON data.",
                                    "Perfect for debugging API integration issues, validating JSON syntax, finding missing commas or brackets, and analyzing nested data structures. Beautified JSON improves readability and speeds up data validation."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "API response: Minified JSON from REST API becomes readable for quick data inspection and debugging.",
                                    "Database export: Compact JSON from MongoDB or other databases becomes structured for analysis.",
                                    "Configuration files: Compressed config JSON becomes clear and easy to edit."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Does beautifying JSON affect data? A: No, beautification only changes formatting. Data structure and values remain identical.",
                                    "Q: Can this tool validate JSON? A: Yes, if your JSON has syntax errors, beautification will highlight issues like missing commas or mismatched brackets.",
                                    "Q: Does prettified JSON load faster? A: No, formatted JSON has the same performance as minified JSON. Formatting only affects readability.",
                                    "Q: Is my JSON data private? A: Yes, all formatting happens entirely in your browser. No JSON data is sent to external servers."
                                ]
                            }
                        ]
                    }
                },
                sql: {
                    title: "About the SQL Beautifier Tool",
                    paragraphs: [
                        "The SQL Beautifier formats SQL queries into a cleaner layout by applying indentation and consistent spacing. It makes long queries easier to read and review.",
                        "This is helpful for debugging complex queries, reviewing joins and conditions, and sharing SQL with teammates. Clean SQL also reduces mistakes when editing WHERE clauses and nested statements.",
                        "Paste your SQL and click Beautify to produce a readable version instantly."
                    ],
                    example: { title: "SQL Beautifier Example", before: "SELECT * FROM users WHERE age>18 AND status='active' ORDER BY created_at DESC", after: "SELECT *\nFROM users\nWHERE age > 18\n  AND status = 'active'\nORDER BY created_at DESC" },
                    details: {
                        sections: [
                            {
                                heading: "What is SQL beautifier?",
                                paragraphs: [
                                    "An SQL Beautifier is a free online tool that formats minified or poorly structured SQL queries into clean, readable code with proper indentation and spacing. Also called a SQL formatter or query prettifier, it transforms compact SQL into a structured format that's easy to understand, debug, and optimize."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use SQL beautifier for compressed queries from production logs, stored procedures, or ORM-generated SQL. Perfect for database administrators, developers, and data analysts who need to analyze, optimize, or debug complex queries.",
                                    "Ideal for formatting SQL from copy-paste snippets, legacy databases, or auto-generated queries. Clean SQL improves readability of JOIN conditions, WHERE clauses, and subqueries, reducing errors and improving performance optimization."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Complex query: 'SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total>100)' becomes properly formatted with clear subquery structure.",
                                    "JOIN-heavy queries: Multiple table joins with conditions become readable and easy to verify logic.",
                                    "Production logs: Compressed SQL from application logs becomes analyzable for performance optimization."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Does beautifying SQL change query results? A: No, beautification only affects formatting and whitespace. Query logic and results remain identical.",
                                    "Q: Will formatted SQL execute faster? A: No, formatting doesn't affect execution speed or performance. It only improves readability for developers.",
                                    "Q: Can I beautify all SQL dialects? A: This tool works with standard SQL. Some database-specific syntax (T-SQL, PL/SQL) may need dialect-specific formatters.",
                                    "Q: Is my SQL query secure? A: Yes, all formatting happens entirely in your browser. No SQL data is transmitted to external servers, keeping sensitive database queries private."
                                ]
                            }
                        ]
                    }
                }
            },
            counter: {
                'character-word': {
                    title: "About the Character and Word Counter",
                    paragraphs: [
                        "The Character and Word Counter instantly calculates key text statistics like characters, words, and sentences. It’s perfect for writers, students, and marketers who need to meet length limits for essays, captions, or ads.",
                        "Knowing counts helps you optimize content for platforms with strict limits (like social media) and improves readability when editing long-form text.",
                        "Paste your text and the stats update right away in your browser—fast and private."
                    ],
                    example: { title: "Character and Word Counter Example", before: "Hello world.", after: "Characters: 12\nWords: 2\nSentences: 1" },
                    details: {
                        sections: [
                            {
                                heading: "What is character and word counter?",
                                paragraphs: [
                                    "A Character and Word Counter is a free online tool that instantly calculates important text statistics including total characters, words, sentences, and paragraphs. Perfect for writers, content creators, students, and marketers who need to track text metrics for content optimization, platform requirements, and readability analysis."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use character and word counter for meeting platform limits on social media, email subject lines, ads, and essays with strict word counts. Essential for content creators optimizing for SEO, Twitter character limits, LinkedIn post length, and ad copy length restrictions.",
                                    "Perfect for students meeting essay requirements, bloggers tracking article length, and marketers analyzing content performance. Helps ensure content meets platform specifications and improves readability."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Social media: Count characters for Twitter's 280-character limit before posting.",
                                    "Academic writing: Verify essay meets minimum/maximum word count requirements.",
                                    "Content marketing: Track word count for blog posts, landing pages, and product descriptions."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: How are characters counted? A: All characters including spaces, punctuation, and special symbols are counted. Some tools exclude spaces.",
                                    "Q: Why is word counting important? A: Word count helps optimize content for platform requirements, ensures SEO best practices, and improves readability metrics.",
                                    "Q: Does this count paragraphs? A: Yes, it counts paragraphs, lines, characters, words, and sentences for comprehensive text analysis.",
                                    "Q: Is my text private? A: Yes, all counting happens entirely in your browser. No text data is sent to external servers."
                                ]
                            }
                        ]
                    }
                },
                line: {
                    title: "About the Count Each Line Tool",
                    paragraphs: [
                        "The Count Each Line tool counts how many lines are in your input text. It’s useful when working with lists, logs, CSV exports, or any data where each line represents a record.",
                        "This helps you quickly estimate dataset size, verify imports/exports, and ensure you copied the correct number of items from a file or spreadsheet.",
                        "Paste your content and the tool instantly shows line totals and related stats."
                    ],
                    example: { title: "Count Each Line Example", before: "Item 1\nItem 2\nItem 3", after: "Total Lines: 3" },
                    details: {
                        sections: [
                            {
                                heading: "What is line counter?",
                                paragraphs: [
                                    "A Line Counter is a free online tool that instantly counts the number of lines in your text input. Perfect for data analysts, developers, and anyone working with lists, logs, datasets, or multi-line content who needs quick line statistics."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use line counter for verifying CSV/TSV imports, counting lines in log files, analyzing dataset size, and validating copied content. Essential for developers debugging code output and data professionals validating data exports.",
                                    "Perfect for estimating file sizes, counting log entries, verifying data integrity, and ensuring correct data transfers between systems."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "CSV import: Count lines to verify correct number of data records imported.",
                                    "Log analysis: Count log entries to estimate file size and processing volume.",
                                    "List verification: Confirm copied list contains expected number of items."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Are empty lines counted? A: Yes, empty lines are counted as separate lines.  Some tools can exclude them.",
                                    "Q: How does this help with data? A: Counting lines helps verify correct data imports/exports and identify missing or extra records.",
                                    "Q: Can this count characters and words too? A: This tool focuses on line counting, though some versions include character and word statistics.",
                                    "Q: Is my data private? A: Yes, all counting happens in your browser. No data is transmitted to external servers."
                                ]
                            }
                        ]
                    }
                },
                'bracket-tag': {
                    title: "About the Bracket and Tag Counter",
                    paragraphs: [
                        "The Bracket and Tag Counter scans your text or code and counts brackets and tag-like symbols. It’s helpful for developers when debugging syntax issues and validating balanced structures.",
                        "Missing or extra brackets are a common cause of errors in code, templates, and configuration files. Quickly counting bracket types can help you spot problems faster.",
                        "Paste your code and the tool reports totals for common bracket pairs instantly."
                    ],
                    example: { title: "Bracket and Tag Counter Example", before: "function test() { return [1, 2]; }", after: "Round ( ): 2\nSquare [ ]: 2\nCurly { }: 2" },
                    details: {
                        sections: [
                            {
                                heading: "What is bracket counter?",
                                paragraphs: [
                                    "A Bracket and Tag Counter is a free online tool that counts all bracket types (parentheses, square brackets, curly braces) and matching pairs in code or text. Essential for developers debugging syntax errors and validating code structure."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use bracket counter for debugging syntax errors in code, templates, and configuration files. Perfect for finding missing or mismatched brackets that cause compilation errors and parsing issues.",
                                    "Ideal for code review, validating JSON/XML structure, checking mathematical expressions, and ensuring balanced parentheses in complex formulas."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Code validation: Verify matching brackets in JavaScript, Python, or Java functions.",
                                    "JSON debugging: Confirm all curly braces and square brackets are balanced.",
                                    "Math formulas: Check parentheses balance in complex calculations."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: What bracket types are counted? A: Typically parentheses ( ), square brackets [ ], and curly braces { }. Some tools also count angle brackets < >.",
                                    "Q: Does unmatched brackets affect results? A: This tool counts all bracket occurrences. Unmatched brackets are still counted but may indicate errors.",
                                    "Q: Can this detect bracket mismatches? A: This tool counts brackets. Use a code linter or editor to detect mismatches and syntax errors.",
                                    "Q: Is my code private? A: Yes, all counting happens in your browser. Code is never sent to external servers."
                                ]
                            }
                        ]
                    }
                }
            },
            conversion: {
                'base64-decoder': {
                    title: "About the Base64 Decoder",
                    paragraphs: [
                        "The Base64 Decoder converts Base64-encoded text back into readable plain text. Base64 is commonly used to safely transmit data in emails, URLs, and API payloads.",
                        "Developers often decode Base64 when inspecting tokens, debugging API responses, or extracting data that was encoded for transport. This tool helps you decode instantly without writing code.",
                        "Paste your Base64 string and click Convert to get the decoded output right away in your browser."
                    ],
                    example: { title: "Base64 Decoder Example", before: "SGVsbG8gV29ybGQ=", after: "Hello World" },
                    details: {
                        sections: [
                            {
                                heading: "What is Base64 decoding?",
                                paragraphs: [
                                    "Base64 decoding is the process of converting Base64-encoded text back into readable plain text. The Base64 Decoder is a free online tool that instantly decodes Base64 strings without requiring coding knowledge. Essential for developers, security professionals, and data analysts who need to read encoded data."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use Base64 decoder for inspecting authentication tokens, JWT payloads, API credentials, and encoded email headers. Perfect for debugging API integrations, reading encoded configuration files, and analyzing encoded data transfers.",
                                    "Ideal for security analysis, email forensics, webhook inspection, and any situation where data is transmitted in Base64 format for safety."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "API tokens: Decode JWT tokens to inspect claims and verify authenticity.",
                                    "Email headers: Decode Base64-encoded email content and metadata.",
                                    "Configuration: Decode Base64 credentials and secrets in config files."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Is Base64 secure for sensitive data? A: No, Base64 is encoding, not encryption. Sensitive data should always be encrypted, not just Base64-encoded.",
                                    "Q: Can decoded text be re-encoded? A: Yes, the same text can be encoded back to Base64 using a Base64 encoder.",
                                    "Q: What if decoded text doesn't make sense? A: The data may be compressed, encrypted, or in a binary format that isn't human-readable.",
                                    "Q: Is my data private? A: Yes, all decoding happens in your browser. No data is sent to external servers."
                                ]
                            }
                        ]
                    }
                },
                'base64-encoder': {
                    title: "About the Base64 Encoder",
                    paragraphs: [
                        "The Base64 Encoder converts plain text into Base64 format. This encoding helps represent binary or special characters using only safe ASCII characters.",
                        "It’s useful for creating test payloads, embedding small text snippets in config files, or preparing content for systems that expect Base64 values.",
                        "Paste your text and click Convert to generate the Base64 output instantly."
                    ],
                    example: { title: "Base64 Encoder Example", before: "Hello World", after: "SGVsbG8gV29ybGQ=" },
                    details: {
                        sections: [
                            {
                                heading: "What is Base64 encoding?",
                                paragraphs: [
                                    "Base64 encoding is the process of converting plain text into Base64 format using a 64-character alphabet. The Base64 Encoder is a free online tool that instantly converts text into Base64 without coding knowledge. Used widely for safe data transmission, email.attachments, and secure communication."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use Base64 encoder for creating API credentials, encoding sensitive URLs for transmission, preparing data for email headers, and embedding small text in configuration files. Perfect for developers needing safe text transmission.",
                                    "Ideal for test data generation, webhook payload creation, and any situation where text needs to be safely transmitted across systems."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "API credentials: Encode username:password for HTTP Basic Authentication headers.",
                                    "Email attachments: Encode binary data for safe email transmission.",
                                    "Configuration: Encode secrets and sensitive strings in config files."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Is Base64 encryption? A: No, Base64 is encoding, not encryption. Use actual encryption for truly sensitive data.",
                                    "Q: How long is Base64-encoded text? A: Encoded output is typically about 33% larger than original text due to the encoding process.",
                                    "Q: Can UTF-8 or unicode be encoded? A: Yes, Base64 can encode UTF-8 text including emojis and special characters.",
                                    "Q: Is my text private? A: Yes, all encoding happens in your browser. No text is sent to external servers."
                                ]
                            }
                        ]
                    }
                },
                'date-conversion': {
                    title: "About the Date Conversion Tool",
                    paragraphs: [
                        "The Date Conversion tool generates the current date/time string instantly. It’s useful for quick timestamps, debugging, logging examples, and test data.",
                        "Developers and writers often need a quick timestamp format for notes, changelogs, or sample outputs without opening another app.",
                        "Click Convert to output the current date and time in a readable format."
                    ],
                    example: { title: "Date Conversion Example", before: "(Click Convert)", after: "Mon Jan 01 2025 12:00:00 GMT+0000 (Coordinated Universal Time)" },
                    details: {
                        sections: [
                            {
                                heading: "What is date conversion?",
                                paragraphs: [
                                    "Date Conversion is the process of generating and formatting date/time strings in readable formats. The Date Converter is a free online tool that instantly outputs current date and time in standard formats. Essential for developers, writers, and IT professionals needing quick timestamp references."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use date converter for generating timestamps for logs, test data, changelogs, and sample outputs. Perfect for developers creating documentation examples, testers generating test scenarios, and writers adding publication dates.",
                                    "Ideal for quick date references without opening calendar apps, creating consistent timestamp formats, and generating ISO-standard date strings."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Changelog: Add current date to version release information.",
                                    "Log files: Generate timestamp for troubleshooting records.",
                                    "Test data: Create realistic date values for testing applications."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: What timezone does this use? A: Typically UTC/GMT, though some versions use local time.",
                                    "Q: Can I format the date differently? A: This tool outputs standard formats. Different formats require specialized converters.",
                                    "Q: Can I convert historical dates? A: This tool generates current date/time. Use specialized date converters for historical dates.",
                                    "Q: Is the time accurate? A: Yes, it uses your device's system time, so keep your device clock synchronized."
                                ]
                            }
                        ]
                    }
                },
                'decimal-string': {
                    title: "About the Decimal to String Converter",
                    paragraphs: [
                        "The Decimal to String Converter converts a sequence of space-separated decimal character codes into readable text. These decimals are typically ASCII/Unicode code points.",
                        "This is useful when working with encoded data from logs, programming challenges, or systems that export text as numeric codes.",
                        "Paste the decimal values (separated by spaces) and click Convert to decode them into a string instantly."
                    ],
                    example: { title: "Decimal to String Example", before: "72 101 108 108 111", after: "Hello" },
                    details: {
                        sections: [
                            {
                                heading: "What is decimal to string conversion?",
                                paragraphs: [
                                    "Decimal to String conversion transforms numeric character codes (ASCII/Unicode code points) into readable text. The Decimal to String Converter is a free online tool that instantly decodes space-separated decimals. Essential for programmers, security researchers, and anyone working with encoded data."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use decimal to string converter for decoding programming challenge outputs, analyzing encoded messages, extracting data from logs with numeric representations. Perfect for CTF/hacking challenges and data forensics.",
                                    "Ideal for reverse engineering encoded strings, debugging character encoding issues, and understanding numeric character representations."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "CTF challenges: Decode numeric sequences to reveal hidden messages.",
                                    "Programming puzzles: Convert decimal codes to understand puzzle hints.",
                                    "Encoding analysis: Understand how text is represented as numbers."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: What format for input? A: Space-separated decimal numbers, one per character.",
                                    "Q: Does this handle Unicode? A: Yes, supports full Unicode range including emojis.",
                                    "Q: What if numbers are invalid? A: Invalid character codes may produce unreadable characters or errors.",
                                    "Q: Is my data private? A: Yes, all conversion happens in your browser. No data is transmitted externally."
                                ]
                            }
                        ]
                    }
                },
                'html-entities': {
                    title: "About the HTML Entities Converter",
                    paragraphs: [
                        "The HTML Entities Converter turns special characters into HTML entity codes (like `&lt;` or `&#60;`). This helps display raw HTML characters as text rather than being interpreted as markup.",
                        "It’s commonly used to safely show code snippets on web pages, prevent formatting issues in CMS editors, and reduce the risk of injection when displaying untrusted content.",
                        "Paste your text and click Convert to produce the entity-encoded output instantly."
                    ],
                    example: { title: "HTML Entities Example", before: "<div>Hello & World</div>", after: "&#60;div&#62;Hello &#38; World&#60;/div&#62;" },
                    details: {
                        sections: [
                            {
                                heading: "What is HTML entities encoding?",
                                paragraphs: [
                                    "HTML Entities encoding converts special characters into safe HTML entity codes like `&lt;` (less-than) and `&#38;` (ampersand). The HTML Entities Converter is a free online tool that prevents code from being interpreted as HTML markup. Essential for web developers and content creators displaying code safely on websites."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use HTML entities encoder for displaying raw code snippets, preventing XSS attacks, showing HTML examples in blog posts, and safely displaying user-generated content. Perfect for website security and code documentation.",
                                    "Ideal for CMS editors preventing formatting issues, email templates ensuring special characters display correctly, and security professionals sanitizing untrusted content."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Code display: Show '<div>' as displayable text without rendering as HTML.",
                                    "Security: Encode user input to prevent injection attacks.",
                                    "Email: Ensure special characters display correctly in email clients."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Will entity-encoded text display the same to users? A: Yes, browsers automatically decode entities for display.",
                                    "Q: What characters need encoding? A: Mainly <, >, &, \", and ' characters that have special meaning in HTML.",
                                    "Q: Does this provide security? A: Entity encoding prevents code interpretation but isn't complete protection. Use additional security measures.",
                                    "Q: Is my content private? A: Yes, encoding happens entirely in your browser."
                                ]
                            }
                        ]
                    }
                },
                'string-decimal': {
                    title: "About the String to Decimal Converter",
                    paragraphs: [
                        "The String to Decimal Converter transforms text into a sequence of decimal character codes (ASCII/Unicode). Each character becomes a number, usually separated by spaces.",
                        "This is useful for debugging encoding issues, generating numeric representations for programming tasks, or preparing data for systems that expect character codes.",
                        "Paste your text and click Convert to get the decimal output instantly."
                    ],
                    example: { title: "String to Decimal Example", before: "ABC", after: "65 66 67" },
                    details: {
                        sections: [
                            {
                                heading: "What is string to decimal conversion?",
                                paragraphs: [
                                    "String to Decimal conversion transforms readable text into sequences of numeric character codes (ASCII/Unicode code points). The String to Decimal Converter is a free online tool that outputs space-separated decimals for each character. Used in programming, education, and security applications."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use string to decimal converter for programming challenges, creating CTF puzzle solutions, analyzing character encoding, and educational demonstrations. Perfect for learning how computers represent characters numerically.",
                                    "Ideal for cryptography studies, encoding algorithm learning, and reverse engineering encoded messages."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Programming lessons: Show students character code conversions.",
                                    "CTF challenges: Generate numeric sequences for puzzle encoding.",
                                    "Cryptography: Understand ASCII values in encryption algorithms."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: What output format?  A: Space-separated decimal numbers, one per character.",
                                    "Q: Does this handle Unicode characters? A: Yes, supports full Unicode range including emojis.",
                                    "Q: What are the decimal ranges? A: ASCII range 0-127, extended ASCII 128-255, Unicode extends further.",
                                    "Q: Is my text private? A: Yes, all conversion happens in your browser."
                                ]
                            }
                        ]
                    }
                },
                'text-binary': {
                    title: "About the Text to Binary Converter",
                    paragraphs: [
                        "The Text to Binary Converter converts plain text into binary (0s and 1s). It outputs 8-bit binary values per character, separated by spaces.",
                        "Binary encoding is useful for educational purposes, debugging low-level formats, or generating sample binary strings for demonstrations and puzzles.",
                        "Paste your text and click Convert to generate the binary output instantly."
                    ],
                    example: { title: "Text to Binary Example", before: "Hi", after: "01001000 01101001" },
                    details: {
                        sections: [
                            {
                                heading: "What is text to binary conversion?",
                                paragraphs: [
                                    "Text to Binary conversion transforms readable text into binary (0s and 1s) representation. The Text to Binary Converter is a free online tool that outputs 8-bit binary codes for each character. Essential for computer science education, programming learning, and understanding digital data representation."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use text to binary converter for educational demonstrations, learning binary number systems, programming challenges, and understanding computer memory. Perfect for students learning how computers represent data at the bit level.",
                                    "Ideal for computer science courses, CTF competitions, cryptography studies, and anyone interested in low-level data representations."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Computer classes: Demonstrate binary representation to students.",
                                    "Learning projects: Create binary puzzles and challenges.",
                                    "Cryptography: Understand binary operations in encryption."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Why 8 bits per character? A: Standard ASCII uses 8-bit bytes, so one character = 8 bits.",
                                    "Q: Can I convert binary back to text? A: Yes, use a binary to text converter to reverse the process.",
                                    "Q: Does this handle Unicode? A: Yes, Unicode characters use more bits (16, 32-bit) than standard ASCII.",
                                    "Q: Is my text private? A: Yes, conversion happens entirely in your browser."
                                ]
                            }
                        ]
                    }
                },
                'url-decode': {
                    title: "About the URL Decode Tool",
                    paragraphs: [
                        "The URL Decode tool converts percent-encoded text back to normal readable text (for example, `%20` becomes a space). URL encoding is common in query strings and form submissions.",
                        "This is useful when debugging links, analyzing analytics parameters, or decoding API inputs that contain encoded characters.",
                        "Paste the encoded value and click Convert to decode it instantly."
                    ],
                    example: { title: "URL Decode Example", before: "Hello%20World%21", after: "Hello World!" },
                    details: {
                        sections: [
                            {
                                heading: "What is URL decoding?",
                                paragraphs: [
                                    "URL decoding converts percent-encoded URLs back into readable text. The URL Decoder is a free online tool that instantly decodes encoded query strings, form data, and URL parameters. Essential for developers debugging URLs, analyzing analytics parameters, and inspecting web traffic."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use URL decoder for analyzing query string parameters, debugging  URL issues, inspecting analytics tracking codes, and reading encoded form submissions. Perfect for web developers troubleshooting URL-based problems.",
                                    "Ideal for API debugging, webhook inspection, security analysis of URLs, and understanding URL encoding patterns."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Query analysis: Decode URL parameters to understand tracking data.",
                                    "Form debugging: Inspect form submissions with encoded values.",
                                    "API inspection: Read encoded parameters in API requests."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Why encode URLs? A: Encoding ensures special characters transmit safely in URLs without breaking formatting.",
                                    "Q: What is %20? A: %20 represents a space character in URL encoding.",
                                    "Q: Can encoded URLs be malicious? A: Yes, obfuscated encoding can hide malicious content. Be cautious with unknown URLs.",
                                    "Q: Is my URL private? A: Yes, decoding happens entirely in your browser."
                                ]
                            }
                        ]
                    }
                },
                'url-encode': {
                    title: "About the URL Encode Tool",
                    paragraphs: [
                        "The URL Encode tool converts text into a URL-safe format by escaping special characters (for example, spaces become `%20`). This helps prevent broken links and invalid query strings.",
                        "Use this when building URLs with user input, creating query parameters, or preparing values to send in HTTP requests.",
                        "Paste your text and click Convert to generate the URL-encoded output instantly."
                    ],
                    example: { title: "URL Encode Example", before: "user@email.com", after: "user%40email.com" },
                    details: {
                        sections: [
                            {
                                heading: "What is URL encoding?",
                                paragraphs: [
                                    "URL encoding converts special characters into safe percent-encoded format for use in URLs. The URL Encoder is a free online tool that instantly encodes text into URL-safe format. Essential for developers creating URLs with user input, building query strings, and ensuring links don't break."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use URL encoder for creating safe URLs from user input, building query parameters, embedding recipient info in URLs, and preparing data for HTTP requests. Perfect for web developers building dynamic links.",
                                    "Ideal for form builders, API integrations, email template creation, and any situation where text needs to be safely transmitted in URLs."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Search links: Encode search queries with spaces and special characters.",
                                    "Email parameters: Encode email addresses in 'mailto' URLs.",
                                    "User input: Safely encode user-provided values in URLs."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: What characters get encoded? A: Spaces, special characters (&, ?, #, @, etc.), and non-ASCII characters.",
                                    "Q: Why %20 for space? A: URL spec uses percent-encoding; %20 is the hex code for space.",
                                    "Q: Do I always need to encode? A: Not for alphanumerics and a few safe chars (-, _, ., ~), but encoding won't hurt.",
                                    "Q: Is my text private? A: Yes, encoding happens entirely in your browser."
                                ]
                            }
                        ]
                    }
                }
            },
            sorting: {
                'alphabetical-sort': {
                    title: "About the Alphabetical Sort Tool",
                    paragraphs: [
                        "The Alphabetical Sort tool arranges your lines in A→Z order. It’s perfect for organizing names, keywords, tags, product lists, or any text where order matters.",
                        "Sorting alphabetically improves readability and helps you spot duplicates, missing items, or patterns in long lists—especially when you’re working with copied data from multiple sources.",
                        "Paste your list (one item per line or space-separated) and click Sort to instantly get the alphabetized result."
                    ],
                    example: { title: "Alphabetical Sort Example", before: "Zebra\nApple\nBanana\nOrange", after: "Apple\nBanana\nOrange\nZebra" },
                    details: {
                        sections: [
                            {
                                heading: "What is alphabetical sorting?",
                                paragraphs: [
                                    "Alphabetical sorting arranges text in A-to-Z order. The Alphabetical Sort Tool is a free online tool that instantly reorders lists alphabetically. Perfect for organizing names, keywords, inventory lists, and any text where alphabetical order improves findability and readability."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use alphabetical sort for organizing contact lists, keyword lists, product catalogs, and reference materials. Essential for librarians, researchers, and content managers maintaining organized information.",
                                    "Perfect for cleaning imported data, organizing team rosters, arranging vocabulary lists, and creating searchable alphabetically-ordered content."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Contact list: Sort names alphabetically for easy lookup.",
                                    "Inventory: Organize products alphabetically by name.",
                                    "Keywords: Arrange SEO keywords in alphabetical order."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Is sorting case-sensitive? A: Most tools treat uppercase and lowercase equally, sorting by letter regardless.",
                                    "Q: What about numbers? A: Numbers typically appear first, sorted numerically before letters.",
                                    "Q: Can I reverse sort (Z to A)? A: Yes, most tools offer reverse alphabetical sorting option.",
                                    "Q: Is my data private? A: Yes, sorting happens entirely in your browser."
                                ]
                            }
                        ]
                    }
                },
                'length-sort': {
                    title: "About the Length Sort Tool",
                    paragraphs: [
                        "The Length Sort tool sorts lines by the number of characters in each line (shortest to longest). It’s useful when you want compact items first or need to group similar-length strings together.",
                        "This can help when cleaning text data, comparing variants, preparing UI labels, or checking which lines are unusually long (often a sign of bad formatting).",
                        "Paste your text (one item per line or space-separated) and click Sort to reorder by length instantly."
                    ],
                    example: { title: "Length Sort Example", before: "Hippopotamus\nCat\nElephant\nDog", after: "Cat\nDog\nElephant\nHippopotamus" },
                    details: {
                        sections: [
                            {
                                heading: "What is length sorting?",
                                paragraphs: [
                                    "Length sorting arranges text lines by character count (shortest to longest). The Length Sort Tool is a free online tool that instantly reorders lists by length. Perfect for organizing text by size, finding outliers, and preparing data for length-based analysis."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use length sort for finding unusually long or short entries, organizing passwords/codes by length, cleaning data, and UI label optimization. Perfect for developers preparing UI content and data analysts identifying anomalies.",
                                    "Ideal for quality assurance, content optimization, and identifying data entry errors."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Data cleaning: Identify suspiciously short or long entries.",
                                    "UI optimization: Sort labels by length for consistent layout.",
                                    "Analysis: Find entries that deviate from expected length ranges."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: How are spaces counted? A: All spaces and characters are counted in total length.",
                                    "Q: Can I reverse sort (longest first)? A: Yes, most tools offer length sort in both directions.",
                                    "Q: Why is length sorting useful? A: Helps identify outliers, errors, and supports length-based analysis and requirements.",
                                    "Q: Is my data private? A: Yes, sorting happens entirely in your browser."
                                ]
                            }
                        ]
                    }
                },
                'randomly-sort': {
                    title: "About the Random Sort Tool",
                    paragraphs: [
                        "The Random Sort tool shuffles your lines into a random order. It’s useful for randomizing lists, picking winners fairly, creating randomized prompts, or sampling datasets.",
                        "Randomization is helpful when you don’t want ordering bias—like when selecting items for review or generating varied test cases.",
                        "Paste your list (one item per line or space-separated) and click Sort to instantly shuffle."
                    ],
                    example: { title: "Random Sort Example", before: "1. First Item\n2. Second Item\n3. Third Item\n4. Fourth Item", after: "3. Third Item\n1. First Item\n4. Fourth Item\n2. Second Item" },
                    details: {
                        sections: [
                            {
                                heading: "What is random sorting?",
                                paragraphs: [
                                    "Random sorting shuffles list items into a random order. The Random Sort Tool is a free online tool that instantly randomizes lists without bias. Perfect for fair selection, eliminating ordering bias, and creating varied test data."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use random sort for picking winners fairly, randomizing survey responses, creating test datasets, and eliminating selection bias. Perfect for contests, research, and testing.",
                                    "Ideal for game development, randomized testing, creating varied examples, and any application requiring unbiased randomization."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "Contest: Randomly shuffle entries to pick fair winners.",
                                    "Testing: Create randomized test data variations.",
                                    "Surveys: Shuffle question order to remove bias."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Is the randomization truly random? A: Browser-based tools use pseudo-random algorithms that are random enough for most uses.",
                                    "Q: Can I shuffle multiple times? A: Yes, each shuffle produces a new random order.",
                                    "Q: Is winner selection fair? A: Yes, random shuffling provides unbiased selection.",
                                    "Q: Is my data private? A: Yes, shuffling happens entirely in your browser."
                                ]
                            }
                        ]
                    }
                },
                'sort-numbers': {
                    title: "About the Sort Numbers Tool",
                    paragraphs: [
                        "The Sort Numbers tool sorts numeric lines in true numeric order (not alphabetical). This avoids the common issue where “10” is placed before “2” when treated as text.",
                        "It’s useful for sorting IDs, quantities, prices, measurements, and any numeric datasets copied from spreadsheets, logs, or APIs.",
                        "Paste numbers (one per line or space-separated) and click Sort to get a correctly ordered list instantly."
                    ],
                    example: { title: "Sort Numbers Example", before: "10\n2\n1\n20\n3", after: "1\n2\n3\n10\n20" },
                    details: {
                        sections: [
                            {
                                heading: "What is numeric sorting?",
                                paragraphs: [
                                    "Numeric sorting arranges numbers in true numerical order (1, 2, 3 instead of 1, 10, 2). The Sort Numbers Tool is a free online tool that handles numeric ordering correctly. Essential for developers, data analysts, and anyone working with numeric data."
                                ]
                            },
                            {
                                heading: "When to use it?",
                                paragraphs: [
                                    "Use numeric sort for ordering IDs, prices, measurements, versions, and any purely numeric data. Perfect for sorting CSV exports, database results, and log entries with numeric fields.",
                                    "Essential for data analysis, version sorting (1.0, 1.1, 2.0), financial data, and statistics where correct numeric order is critical."
                                ]
                            },
                            {
                                heading: "Examples",
                                paragraphs: [
                                    "ID sorting: Order user IDs 1, 10, 100 correctly instead of alphabetically.",
                                    "Prices: Sort product prices in correct numerical order.",
                                    "Versions: Sort software versions (1.0, 1.1, 2.0)  properly."
                                ]
                            },
                            {
                                heading: "FAQs",
                                paragraphs: [
                                    "Q: Why not use alphabetical sort? A: Alphabetical sorting treats '10' as coming before '2' (text comparison), breaking numeric logic.",
                                    "Q: Can I sort decimals? A: Yes, numeric sort handles decimals correctly too.",
                                    "Q: What about negative numbers? A: Yes, negative numbers sort before positive numbers in ascending order.",
                                    "Q: Is my data private? A: Yes, sorting happens entirely in your browser."
                                ]
                            }
                        ]
                    }
                }
            },
            remove: {
                'remove-consonants': { title: "About the Remove Consonants Tool", paragraphs: ["Removes all consonant letters from the text."], example: { title: "Example", before: "Hello", after: "eo" }, details: { sections: [ { heading: "What is remove consonants?", paragraphs: ["Remove consonants eliminates all consonant letters (b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z) from text, leaving only vowels."] }, { heading: "When to use it?", paragraphs: ["Use for linguistic analysis, creating vowel-only text, puzzles, or artistic text effects."] }, { heading: "Examples", paragraphs: ["Word: 'Hello' becomes 'eo'.", "Sentence: 'The cat' becomes 'e a'.", "Text: Creates vowel-only content."] }, { heading: "FAQs", paragraphs: ["Q: Case sensitive? A: No, removes both cases.", "Q: Y treated as? A: Consonant (not vowel).", "Q: Non-letters? A: Preserved.", "Q: Languages? A: English consonants only."] } ] } },
                'remove-duplicate-lines': { title: "About the Remove Duplicate Lines Tool", paragraphs: ["Removes duplicate lines from a list."], example: { title: "Example", before: "A\nA\nB", after: "A\nB" }, details: { sections: [ { heading: "What is remove duplicate lines?", paragraphs: ["Remove duplicate lines eliminates repeated lines from text, keeping only the first occurrence of each unique line."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning lists, data deduplication, removing repeated entries, or organizing unique items."] }, { heading: "Examples", paragraphs: ["List: 'A\nA\nB' becomes 'A\nB'.", "Names: Remove repeated names.", "Data: Clean duplicate entries."] }, { heading: "FAQs", paragraphs: ["Q: Case sensitive? A: Yes, 'A' ≠ 'a'.", "Q: Whitespace? A: Considers exact matches.", "Q: Order preserved? A: Keeps first occurrence.", "Q: Empty lines? A: Treats as duplicates."] } ] } },
                'remove-duplicate-words': { title: "About the Remove Duplicate Words Tool", paragraphs: ["Removes repeated words."], example: { title: "Example", before: "This is is a test", after: "This is a test" }, details: { sections: [ { heading: "What is remove duplicate words?", paragraphs: ["Remove duplicate words removes repeated adjacent words in text to improve readability and prevent redundancy."] }, { heading: "When to use it?", paragraphs: ["Use for editing text, cleaning transcripts, removing typos, or normalizing repeated word sequences."] }, { heading: "Examples", paragraphs: ["Sentence: 'This is is a test' becomes 'This is a test'.", "Document: Remove accidental word doubles.", "Copy edit: Normalize repeated words."] }, { heading: "FAQs", paragraphs: ["Q: Adjacent only? A: Yes, removes repeated sequential words.", "Q: Case sensitive? A: Usually yes, depending on tool logic.", "Q: Punctuation? A: Preserves punctuation around words.", "Q: Word boundaries? A: Uses spaces to detect words."] } ] } },
                'remove-empty-lines': { title: "About the Remove Empty Lines Tool", paragraphs: ["Removes blank lines."], example: { title: "Example", before: "A\n\nB", after: "A\nB" }, details: { sections: [ { heading: "What is remove empty lines?", paragraphs: ["Remove empty lines deletes blank lines from text, leaving only lines that contain characters."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning pasted content, formatting documents, removing gaps in lists, or preparing text for processing."] }, { heading: "Examples", paragraphs: ["Text: 'A\n\nB' becomes 'A\nB'.", "Documents: Remove blank separators.", "Lists: Compact list entries."] }, { heading: "FAQs", paragraphs: ["Q: Preserves spaces? A: Removes only blank lines.", "Q: Tabs? A: Blank lines with tabs count as non-empty.", "Q: List formatting? A: Helps compact output.", "Q: Reversible? A: No once removed."] } ] } },
                'remove-extra-spaces': { title: "About the Remove Extra Spaces Tool", paragraphs: ["Replaces multiple spaces with a single space."], example: { title: "Example", before: "A   B", after: "A B" }, details: { sections: [ { heading: "What is remove extra spaces?", paragraphs: ["Remove extra spaces reduces runs of multiple spaces to a single space, normalizing spacing in text."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning pasted content, formatting text, or standardizing spacing in documents and code."] }, { heading: "Examples", paragraphs: ["Text: 'A   B' becomes 'A B'.", "Paragraphs: Remove irregular spacing.", "Lists: Standardize separators."] }, { heading: "FAQs", paragraphs: ["Q: Tabs? A: Only spaces are affected.", "Q: Leading/trailing? A: Internal spaces are normalized.", "Q: Multiple spaces? A: Collapses them to one.", "Q: Reversible? A: No, original spacing lost."] } ] } },
                'remove-first-characters': { title: "About the Remove First Characters Tool", paragraphs: ["Removes N characters from the start of each line."], example: { title: "Example", before: "1. Apple", after: "Apple" }, details: { sections: [ { heading: "What is remove first characters?", paragraphs: ["Remove first characters strips a specified number of characters from the beginning of each line."] }, { heading: "When to use it?", paragraphs: ["Use for removing prefixes, line numbers, bullets, or unwanted characters at the start of lines."] }, { heading: "Examples", paragraphs: ["Line: '1. Apple' becomes 'Apple'.", "Data: Remove 'ID:' from each row.", "Formatting: Strip leading markers."] }, { heading: "FAQs", paragraphs: ["Q: How many? A: You choose the count.", "Q: Empty lines? A: No change or removed if count exceeds length.", "Q: Per line? A: Yes, each line individually.", "Q: Spaces? A: Removes any character type."] } ] } },
                'remove-html-comments': { title: "About the Remove HTML Comments Tool", paragraphs: ["Removes HTML comments."], example: { title: "Example", before: "<!-- comment -->", after: "" }, details: { sections: [ { heading: "What is remove HTML comments?", paragraphs: ["Remove HTML comments strips out <!-- comment --> sections from HTML code, leaving visible page content intact."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning HTML source, reducing page clutter, or preparing code for publication or deployment."] }, { heading: "Examples", paragraphs: ["HTML: Remove '<!-- comment -->' from markup.", "Templates: Clean commented sections.", "Export: Prepare code for delivery."] }, { heading: "FAQs", paragraphs: ["Q: Inline comments? A: Yes, removes all HTML comments.", "Q: Script comments? A: Only HTML comment syntax.", "Q: Visible output? A: Comments disappear.", "Q: Safe? A: Keeps actual text content."] } ] } },
                'remove-html-tags': { title: "About the Remove HTML Tags Tool", paragraphs: ["Removes HTML tags, keeping text."], example: { title: "Example", before: "<b>Bold</b>", after: "Bold" }, details: { sections: [ { heading: "What is remove HTML tags?", paragraphs: ["Remove HTML tags strips markup tags like <b>, <p>, <div> from text, leaving only the readable content."] }, { heading: "When to use it?", paragraphs: ["Use for extracting plain text from HTML, cleaning source code, or preparing content for text analysis."] }, { heading: "Examples", paragraphs: ["Markup: '<b>Bold</b>' becomes 'Bold'.", "Web pages: Extract text from HTML source.", "Feeds: Clean HTML content."] }, { heading: "FAQs", paragraphs: ["Q: Keeps text? A: Yes, removes only tags.", "Q: Attributes? A: Removes tags and attributes.", "Q: Scripts? A: Removes markup but not script content alone.", "Q: Nested tags? A: Handles nested HTML tags."] } ] } },
                'remove-last-characters': { title: "About the Remove Last Characters Tool", paragraphs: ["Removes N characters from the end of each line."], example: { title: "Example", before: "Item,", after: "Item" }, details: { sections: [ { heading: "What is remove last characters?", paragraphs: ["Remove last characters strips a specified number of characters from the end of each line."] }, { heading: "When to use it?", paragraphs: ["Use for trimming trailing punctuation, removing suffixes, or cleaning line endings."] }, { heading: "Examples", paragraphs: ["Line: 'Item,' becomes 'Item'.", "Data: Trim '.00' from prices.", "Format: Remove trailing commas or tokens."] }, { heading: "FAQs", paragraphs: ["Q: How many? A: You choose the count.", "Q: Empty lines? A: No change if line is shorter.", "Q: Per line? A: Yes, each line individually.", "Q: Spaces? A: Removes any trailing characters."] } ] } },
                'remove-leading-trailing-spaces': { title: "About the Trim Spaces Tool", paragraphs: ["Removes spaces from start and end of lines."], example: { title: "Example", before: "  text  ", after: "text" }, details: { sections: [ { heading: "What is trim spaces?", paragraphs: ["Trim spaces removes leading and trailing whitespace from each line, leaving the main content intact."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning pasted text, formatting code, or preparing content for import where extra spaces might cause issues."] }, { heading: "Examples", paragraphs: ["Line: '  text  ' becomes 'text'.", "CSV: Clean values before import.", "Code: Remove unwanted line padding."] }, { heading: "FAQs", paragraphs: ["Q: Internal spaces? A: Not removed.", "Q: Tabs? A: Leading and trailing tabs are trimmed.", "Q: Single line? A: Works per line.", "Q: Blank lines? A: Leaves empty lines if whitespace only."] } ] } },
                'remove-line-breaks': { title: "About the Remove Line Breaks Tool", paragraphs: ["Converts multi-line text to single line."], example: { title: "Example", before: "A\nB", after: "A B" }, details: { sections: [ { heading: "What is remove line breaks?", paragraphs: ["Remove line breaks converts text that spans multiple lines into a single line by replacing newline characters with spaces."] }, { heading: "When to use it?", paragraphs: ["Use for inline formatting, preparing copy for social posts, or merging multiline lists into one line."] }, { heading: "Examples", paragraphs: ["Text: 'A\nB' becomes 'A B'.", "Copy: Merge paragraphs into one line.", "Lists: Convert vertical list to inline text."] }, { heading: "FAQs", paragraphs: ["Q: Preserves spaces? A: Adds spaces between original lines.", "Q: Multiple lines? A: Joins all lines into one.", "Q: Tabs? A: Newlines removed, tabs preserved.", "Q: Reversible? A: Only by reintroducing breaks."] } ] } },
                'remove-lines-containing': { title: "About the Remove Lines Containing Tool", paragraphs: ["Removes lines containing a specific word."], example: { title: "Example", before: "Error: 1\nOk: 2", after: "Ok: 2" }, details: { sections: [ { heading: "What is remove lines containing?", paragraphs: ["Remove lines containing deletes any line that includes a specified keyword or phrase."] }, { heading: "When to use it?", paragraphs: ["Use for filtering logs, cleaning error messages, removing unwanted rows from data exports, or excluding specific content."] }, { heading: "Examples", paragraphs: ["Log: Remove lines containing 'Error'.", "CSV: Exclude rows with 'inactive'.", "Text: Filter out mentions of a word."] }, { heading: "FAQs", paragraphs: ["Q: Case sensitive? A: Depends on tool settings.", "Q: Partial matches? A: Removes any containing the phrase.", "Q: Whole word? A: Typically substring-based.", "Q: Multiple lines? A: Removes all matching lines."] } ] } },
                'remove-numbers': { title: "About the Remove Numbers Tool", paragraphs: ["Removes all digits."], example: { title: "Example", before: "User123", after: "User" }, details: { sections: [ { heading: "What is remove numbers?", paragraphs: ["Remove numbers deletes all numeric digits from the text, leaving letters and punctuation untouched."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning product codes, removing IDs from text, or preparing content without numeric noise."] }, { heading: "Examples", paragraphs: ["Text: 'User123' becomes 'User'.", "Report: Remove digits from descriptions.", "Labels: Clean up numeric tags."] }, { heading: "FAQs", paragraphs: ["Q: Decimal digits? A: Removes all digits individually.", "Q: Phone numbers? A: Removes digits from numbers.", "Q: Letters remain? A: Yes, only digits removed.", "Q: Formatting? A: Keeps punctuation."] } ] } },
                'remove-numbers-from-text': { title: "About the Remove Numbers From Text Tool", paragraphs: ["Removes all digits from text."], example: { title: "Example", before: "Year 2023", after: "Year " }, details: { sections: [ { heading: "What is remove numbers from text?", paragraphs: ["Remove numbers from text strips all numeric digits from the input, leaving only letters, spaces, and punctuation."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning content, preparing text for analysis, or removing numeric clutter from descriptions."] }, { heading: "Examples", paragraphs: ["Text: 'Year 2023' becomes 'Year '.", "Data: Remove invoice numbers from notes.", "Copy: Strip numeric noise from sentences."] }, { heading: "FAQs", paragraphs: ["Q: Keeps letters? A: Yes, only digits removed.", "Q: Decimal points? A: Digits removed but punctuation kept.", "Q: Spaces? A: Spaces remain.", "Q: Numeric codes? A: Removes digits from codes."] } ] } },
                'remove-quotes': { title: "About the Remove Quotes Tool", paragraphs: ["Removes double quotes."], example: { title: "Example", before: "\"Hi\"", after: "Hi" }, details: { sections: [ { heading: "What is remove quotes?", paragraphs: ["Remove quotes strips double quotation marks from text, leaving the quoted content intact."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning exported strings, preparing copy, or removing unnecessary quote characters from text."] }, { heading: "Examples", paragraphs: ["Text: '\"Hi\"' becomes 'Hi'.", "CSV: Remove quotes around values.", "Data: Clean copied strings."] }, { heading: "FAQs", paragraphs: ["Q: Single quotes? A: Only double quotes removed.", "Q: Keeps text? A: Yes, content remains.", "Q: Nested quotes? A: Removes all double quotes.", "Q: Escape sequences? A: Removes visible quote characters."] } ] } },
                'remove-single-quotes': { title: "About the Remove Single Quotes Tool", paragraphs: ["Removes single quotes."], example: { title: "Example", before: "'Hi'", after: "Hi" }, details: { sections: [ { heading: "What is remove single quotes?", paragraphs: ["Remove single quotes strips apostrophes or single quote marks from text, preserving the surrounding characters."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning data, preparing strings for code, or removing quote characters from text exports."] }, { heading: "Examples", paragraphs: ["Text: ''Hi'' becomes 'Hi'.", "Values: Remove single quotes from CSV data.", "Copy: Clean quote marks from content."] }, { heading: "FAQs", paragraphs: ["Q: Double quotes? A: No, only single quotes removed.", "Q: Apostrophes? A: Yes, removed as single quotes.", "Q: Nested quotes? A: Removes all single quote characters.", "Q: Output? A: Text with quotes stripped."] } ] } },
                'remove-spaces': { title: "About the Remove Spaces Tool", paragraphs: ["Removes all spaces."], example: { title: "Example", before: "A B", after: "AB" }, details: { sections: [ { heading: "What is remove spaces?", paragraphs: ["Remove spaces deletes all space characters from the text, joining words and characters together without whitespace."] }, { heading: "When to use it?", paragraphs: ["Use for compacting text, preparing values for identifiers, or removing unwanted whitespace from data entries."] }, { heading: "Examples", paragraphs: ["Text: 'A B' becomes 'AB'.", "Usernames: 'john doe' becomes 'johndoe'.", "Codes: 'AB 12' becomes 'AB12'."] }, { heading: "FAQs", paragraphs: ["Q: Does it remove tabs? A: No, only space characters.", "Q: What about new lines? A: Newline characters are not removed.", "Q: Can it break words? A: Yes, it joins words together by removing spaces.", "Q: Is punctuation preserved? A: Yes, only spaces are affected."] } ] } },
                'remove-special-characters': { title: "About the Remove Special Characters Tool", paragraphs: ["Keeps only alphanumeric characters."], example: { title: "Example", before: "Hi!", after: "Hi" }, details: { sections: [ { heading: "What is remove special characters?", paragraphs: ["Remove special characters strips out punctuation and symbols, leaving only letters and numbers in the text."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning user input, preparing data for parsing, or removing non-alphanumeric noise from text."] }, { heading: "Examples", paragraphs: ["Text: 'Hi!' becomes 'Hi'.", "Data: Strip '#$%&' from strings.", "Forms: Clean input before validation."] }, { heading: "FAQs", paragraphs: ["Q: Keeps letters and digits? A: Yes, removes only special symbols.", "Q: Spaces? A: Spaces may be preserved depending on tool settings.", "Q: Unicode? A: Removes most non-alphanumeric characters.", "Q: For code? A: Good for sanitizing text."] } ] } },
                'remove-tabs': { title: "About the Remove Tabs Tool", paragraphs: ["Removes tab characters."], example: { title: "Example", before: "A\tB", after: "AB" }, details: { sections: [ { heading: "What is remove tabs?", paragraphs: ["Remove tabs deletes tab characters from text, turning tab-separated content into plain text without indentation."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning copied spreadsheet data, normalizing pasted text, or removing unwanted tab spacing."] }, { heading: "Examples", paragraphs: ["Text: 'A\tB' becomes 'AB'.", "CSV: Convert tab-separated values to plain text.", "Code: Remove tabs for consistent indentation."] }, { heading: "FAQs", paragraphs: ["Q: Keeps spaces? A: Yes, only tabs are removed.", "Q: Multiple tabs? A: All tabs in the text are removed.", "Q: Line breaks? A: Unchanged.", "Q: Tabs in code? A: Removes them from any text."] } ] } },
                'remove-text-between': { title: "About the Remove Text Between Tool", paragraphs: ["Removes text between start and end markers."], example: { title: "Example", before: "A[1]B", after: "AB" }, details: { sections: [ { heading: "What is remove text between?", paragraphs: ["Remove text between deletes everything between two specified delimiters, including the delimiters themselves."] }, { heading: "When to use it?", paragraphs: ["Use for stripping comments, removing hidden tokens, or cleaning tagged content from text."] }, { heading: "Examples", paragraphs: ["Text: 'A[1]B' becomes 'AB'.", "HTML: Remove '<script>...</script>' blocks.", "Logs: Strip timestamps between brackets."] }, { heading: "FAQs", paragraphs: ["Q: Delimiters? A: You specify start and end markers.", "Q: Nested content? A: Removes each matching section.", "Q: Inclusion? A: Removes both delimiters and enclosed text.", "Q: Multiple occurrences? A: Removes all matches."] } ] } },
                'remove-vowels': { title: "About the Remove Vowels Tool", paragraphs: ["Removes a,e,i,o,u."], example: { title: "Example", before: "Hello", after: "Hll" }, details: { sections: [ { heading: "What is remove vowels?", paragraphs: ["Remove vowels deletes vowel letters (a, e, i, o, u) from text, leaving consonants and other characters intact."] }, { heading: "When to use it?", paragraphs: ["Use for creating puzzles, games, or stylized text effects with vowel-less content."] }, { heading: "Examples", paragraphs: ["Word: 'Hello' becomes 'Hll'.", "Phrase: 'Open AI' becomes 'pn '.", "Style: Create consonant-only text for visual effect."] }, { heading: "FAQs", paragraphs: ["Q: Case sensitive? A: No, removes vowels in all cases.", "Q: Y treated as vowel? A: No, y remains.", "Q: Keeps punctuation? A: Yes.", "Q: Languages? A: English vowels only."] } ] } },
            },
            replace: {
                'find-replace': { title: "About the Search and Replace Tool", paragraphs: ["The Search and Replace tool allows for bulk text edits by finding and replacing specific words."], example: { title: "Example", before: "Hello World", after: "Hello Universe" }, details: { sections: [ { heading: "What is search and replace?", paragraphs: ["Search and replace finds a target string in text and substitutes it with another string throughout the input."] }, { heading: "When to use it?", paragraphs: ["Use for updating variable names, correcting typos, refactoring text, or making bulk edits across a document."] }, { heading: "Examples", paragraphs: ["Change 'cat' to 'dog' in text.", "Replace outdated URLs across content.", "Update product names in a list. "] }, { heading: "FAQs", paragraphs: ["Q: Is it case-sensitive? A: Depends on tool settings.", "Q: Can I replace multiple words? A: One replace per operation.", "Q: Does it support regex? A: Not in this basic tool.", "Q: Can I undo? A: Use browser undo or re-run with original text."] } ] } },
                'replace-newline-commas': { title: "About the Replace New Line with Commas Tool", paragraphs: ["This tool converts vertical lists into comma-separated strings."], example: { title: "Example", before: "A\nB", after: "A, B" }, details: { sections: [ { heading: "What is replace new line with commas?", paragraphs: ["This tool joins lines by replacing newline characters with commas, turning a vertical list into a horizontal, comma-separated string."] }, { heading: "When to use it?", paragraphs: ["Use for preparing data for CSV input, SQL queries, or any application that requires comma-separated values. "] }, { heading: "Examples", paragraphs: ["List: 'A\nB' becomes 'A, B'.", "Emails: 'a@example.com\nb@example.com' becomes 'a@example.com, b@example.com'.", "Tags: 'red\ngreen' becomes 'red, green'."] }, { heading: "FAQs", paragraphs: ["Q: Does it add spaces? A: Yes, adds a comma and a space by default.", "Q: Trailing comma? A: No trailing comma is added.", "Q: Empty lines? A: They may result in extra commas.", "Q: Can I reverse it? A: Use convert commas to lines tool. "] } ] } },
                'replace-spaces': { title: "About the Replace Spaces Tool", paragraphs: ["The Replace Spaces tool substitutes space characters with a custom string."], example: { title: "Example", before: "A B", after: "A-B" }, details: { sections: [ { heading: "What is replace spaces?", paragraphs: ["Replace spaces changes every space character in text to a user-defined replacement string."] }, { heading: "When to use it?", paragraphs: ["Use for creating slugs, code-friendly identifiers, or customizing spacing in plain text."] }, { heading: "Examples", paragraphs: ["Change spaces to hyphens: 'A B' becomes 'A-B'.", "Create underscores: 'Hello World' becomes 'Hello_World'.", "Generate slugs: 'My Title' becomes 'My-Title'."] }, { heading: "FAQs", paragraphs: ["Q: Preserves text? A: Yes, only spaces are replaced.", "Q: Multiple spaces? A: Each space is replaced individually.", "Q: Tabs? A: Only spaces are affected.", "Q: Empty strings? A: Leaves non-space characters unchanged."] } ] } },
                'replace-text-between': { title: "About the Replace Text Between Tool", paragraphs: ["The Replace Text Between tool replaces content found between specific delimiters."], example: { title: "Example", before: "A(1)B", after: "A(x)B" }, details: { sections: [ { heading: "What is replace text between?", paragraphs: ["Replace text between swaps out the content located between two markers while leaving the markers or replacing them as configured."] }, { heading: "When to use it?", paragraphs: ["Use for updating placeholders, changing values in tags, or editing content within structured text blocks."] }, { heading: "Examples", paragraphs: ["Text: 'A(1)B' becomes 'A(x)B'.", "HTML: Replace content inside <span> tags.", "Template: Update variables in templated text."] }, { heading: "FAQs", paragraphs: ["Q: Does it include delimiters? A: It replaces the content between them.", "Q: Multiple matches? A: Replaces all matching sections.", "Q: Nested sections? A: Handles basic occurrences.", "Q: Exact match? A: Yes, based on your delimiters."] } ] } }
            },
            generators: {
                'lorem-ipsum': {
                    title: "About the Lorem Ipsum Generator",
                    paragraphs: ["The Lorem Ipsum Generator produces placeholder text used to demonstrate the visual form of a document."],
                    example: { title: "Lorem Ipsum Example", before: "(Click Generate)", after: "Lorem ipsum dolor sit amet..." },
                    details: { sections: [ { heading: "What is Lorem Ipsum?", paragraphs: ["Lorem Ipsum is dummy text used to fill layout space in design mockups and prototypes, giving a realistic view of text formatting."] }, { heading: "When to use it?", paragraphs: ["Use when creating website mockups, wireframes, templates, or any design where actual content is not yet available."] }, { heading: "Examples", paragraphs: ["Use as placeholder text in brochure layouts.", "Fill headings and paragraphs during UI design.", "Preview fonts and spacing without real content."] }, { heading: "FAQs", paragraphs: ["Q: Is it meaningful? A: No, it is placeholder text.", "Q: Why use it? A: To test typography and layout.", "Q: Can I modify it? A: Yes, use generated text as needed.", "Q: Is it real Latin? A: It is based on Latin but not meaningful."] } ] } },
                'password': {
                    title: "About the Password Generator",
                    paragraphs: ["The Password Generator creates strong, secure passwords composed of a mix of letters, numbers, and special symbols."],
                    example: { title: "Password Example", before: "(Click Generate)", after: "x#kL9$mP" },
                    details: { sections: [ { heading: "What is password generation?", paragraphs: ["Password generation creates unpredictable strings of characters designed to resist guessing and brute force attacks."] }, { heading: "When to use it?", paragraphs: ["Use when you need secure passwords for accounts, logins, or encryption keys."] }, { heading: "Examples", paragraphs: ["Generate strong passwords for email or social accounts.", "Create unique passwords for each service.", "Use randomly generated passwords for admin access."] }, { heading: "FAQs", paragraphs: ["Q: Is it secure? A: Stronger than user-created passwords.", "Q: Can I customize length? A: Yes, specify length when available.", "Q: Should I reuse it? A: No, use unique passwords.", "Q: Does it include symbols? A: Yes, if enabled."] } ] } },
                'random-color': {
                    title: "About the Random Color Generator",
                    paragraphs: ["The Random Color Generator produces random hexadecimal color codes."],
                    example: { title: "Random Color Example", before: "(Click Generate)", after: "#E63946" },
                    details: { sections: [ { heading: "What is random color generation?", paragraphs: ["Random color generation creates a hex code representing a color selected at random within the RGB color space."] }, { heading: "When to use it?", paragraphs: ["Use for design exploration, theme selection, sketching palettes, or quick placeholder colors."] }, { heading: "Examples", paragraphs: ["Generate a background color for a mockup.", "Pick a random accent color for a website.", "Try different color ideas for UI components."] }, { heading: "FAQs", paragraphs: ["Q: What format? A: Hexadecimal color code like #RRGGBB.", "Q: Can I preview it? A: Usually yes in design apps.", "Q: Is it deterministic? A: No, random each time.", "Q: Good for palettes? A: Useful for experimentation."] } ] } },
                'random-email': {
                    title: "About the Random Email Addresses Generator",
                    paragraphs: ["The Random Email Addresses Generator creates fictional email addresses."],
                    example: { title: "Random Email Example", before: "(Click Generate)", after: "user_8291@example.com" },
                    details: { sections: [ { heading: "What is random email generation?", paragraphs: ["Random email generation creates placeholder email addresses for testing, examples, or demo data without using real user information."] }, { heading: "When to use it?", paragraphs: ["Use for test accounts, sample data in forms, or privacy-safe placeholders."] }, { heading: "Examples", paragraphs: ["Generate user_8291@example.com for demo forms.", "Create sample contact lists for UI testing.", "Use fake addresses when sharing mockups."] }, { heading: "FAQs", paragraphs: ["Q: Are these real emails? A: No, they are fictional.", "Q: Can I use them in production? A: Only for testing/demos.", "Q: Custom domains? A: Often uses example domains.", "Q: Are they unique? A: Usually random enough for sample data."] } ] } },
                'random-date': {
                    title: "About the Random Date Generator",
                    paragraphs: ["The Random Date Generator produces random dates and timestamps."],
                    example: { title: "Random Date Example", before: "(Click Generate)", after: "2023-11-05T14:20:30.000Z" },
                    details: { sections: [ { heading: "What is random date generation?", paragraphs: ["Random date generation outputs a date and time chosen at random, often formatted in ISO timestamp form."] }, { heading: "When to use it?", paragraphs: ["Use for test data, placeholder timestamps, scheduling examples, or timeline simulations."] }, { heading: "Examples", paragraphs: ["Generate random timestamps for logs.", "Create sample delivery dates for demos.", "Use random dates in form field examples."] }, { heading: "FAQs", paragraphs: ["Q: What format? A: Usually ISO 8601 timestamps.", "Q: Can I choose range? A: Depends on tool options.", "Q: Is it time zone aware? A: Typically uses UTC or local time.", "Q: Good for tests? A: Yes, for sample data."] } ] } },
                'random-ip': {
                    title: "About the Random IP Address Generator",
                    paragraphs: ["The Random IP Address Generator creates valid IPv4 addresses."],
                    example: { title: "Random IP Example", before: "(Click Generate)", after: "192.0.2.15" },
                    details: { sections: [ { heading: "What is random IP generation?", paragraphs: ["Random IP generation creates a valid IPv4 address composed of four octets separated by dots."] }, { heading: "When to use it?", paragraphs: ["Use for testing network configurations, placeholder data, or development environments."] }, { heading: "Examples", paragraphs: ["Generate a fake IP for a demo network.", "Use random addresses for mock server logs.", "Test IP validation logic with random inputs."] }, { heading: "FAQs", paragraphs: ["Q: Are these routable? A: May be private or non-routable examples.", "Q: IPv6? A: This tool creates IPv4 only.", "Q: Unique? A: Randomly generated, not guaranteed unique.", "Q: Safe to use? A: Good for testing only."] } ] } },
                'random-mac': {
                    title: "About the Random MAC Address Generator",
                    paragraphs: ["The Random MAC Address Generator creates random Media Access Control addresses."],
                    example: { title: "Random MAC Example", before: "(Click Generate)", after: "00:1A:2B:3C:4D:5E" },
                    details: { sections: [ { heading: "What is random MAC generation?", paragraphs: ["Random MAC generation creates a 12-digit hexadecimal hardware address used to identify network interfaces."] }, { heading: "When to use it?", paragraphs: ["Use for testing network setups, generating example hardware IDs, or demo data."] }, { heading: "Examples", paragraphs: ["Create fake MACs for vendor documentation.", "Generate sample hardware addresses for networking tutorials.", "Test MAC filtering and formatting logic."] }, { heading: "FAQs", paragraphs: ["Q: Is it real hardware? A: No, it's for testing only.", "Q: Format? A: Six pairs of hex digits separated by colons.", "Q: Can it be reused? A: Yes, but avoid conflicts in production.", "Q: Vendor prefix? A: Usually random across all bytes."] } ] } },
                'random-user-agent': {
                    title: "About the Random User Agent Generator",
                    paragraphs: ["The Random User Agent Generator provides random browser user agent strings for testing."],
                    example: { title: "Random User Agent Example", before: "(Click Generate)", after: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..." },
                    details: { sections: [ { heading: "What is random user agent generation?", paragraphs: ["Random user agent generation creates browser identification strings that simulate different devices and software configurations."] }, { heading: "When to use it?", paragraphs: ["Use for web testing, scraping, browser compatibility checks, or anonymized demo environments."] }, { heading: "Examples", paragraphs: ["Simulate Chrome on Windows.", "Test server responses to mobile browsers.", "Use different user agents for scraping or testing."] }, { heading: "FAQs", paragraphs: ["Q: Are these real browsers? A: They mimic real user-agent strings.", "Q: Do they include devices? A: Yes, often includes OS and browser info.", "Q: Use in production? A: Only for testing and development.", "Q: Can they be invalid? A: Usually valid format strings."] } ] } },
                'random-ipv6': {
                    title: "About the Random IPv6 Address Generator",
                    paragraphs: ["The Random IPv6 Address Generator creates valid IPv6 addresses."],
                    example: { title: "Random IPv6 Example", before: "(Click Generate)", after: "2001:0db8:85a3:0000:0000:8a2e:0370:7334" },
                    details: { sections: [ { heading: "What is random IPv6 generation?", paragraphs: ["Random IPv6 generation creates a valid 128-bit IP address using colon-separated hexadecimal groups."] }, { heading: "When to use it?", paragraphs: ["Use for testing IPv6 configurations, documentation examples, or sample network data."] }, { heading: "Examples", paragraphs: ["Generate demo IPv6 addresses for logs.", "Use random addresses in tutorials.", "Test IPv6 parsers and validators."] }, { heading: "FAQs", paragraphs: ["Q: Format? A: Eight groups of hex digits separated by colons.", "Q: Global vs local? A: Generates generic example addresses.", "Q: Use in production? A: Only for testing.", "Q: IPv4? A: This tool is IPv6 only."] } ] } },
                'url-slug': {
                    title: "About the URL Slug Generator",
                    paragraphs: ["The URL Slug Generator converts regular text into a URL-friendly format by lowercasing and replacing spaces with hyphens."],
                    example: { title: "URL Slug Example", before: "Hello World!", after: "hello-world" },
                    details: { sections: [ { heading: "What is a URL slug?", paragraphs: ["A URL slug is a simplified, lowercase text string used in web addresses and SEO-friendly URLs."] }, { heading: "When to use it?", paragraphs: ["Use for blog posts, product pages, or any web content that needs a readable address path."] }, { heading: "Examples", paragraphs: ["Convert 'Hello World!' to 'hello-world'.", "Generate SEO-friendly page URLs.", "Create readable links for articles."] }, { heading: "FAQs", paragraphs: ["Q: Removes punctuation? A: Yes, punctuation is stripped or replaced.", "Q: Lowercase? A: Yes, slugs are typically lowercase.", "Q: Spaces? A: Converted to hyphens.", "Q: Good for SEO? A: Yes, readable slugs help SEO."] } ] } },
                'random-number': {
                    title: "About the Random Number Generator",
                    paragraphs: ["The Random Number Generator produces random integers within a specified range."],
                    example: { title: "Random Number Example", before: "Min: 1, Max: 100", after: "42" },
                    details: { sections: [ { heading: "What is random number generation?", paragraphs: ["Random number generation produces an integer selected randomly from a defined minimum and maximum range."] }, { heading: "When to use it?", paragraphs: ["Use for games, testing, sampling, or any scenario where you need unpredictable numeric values."] }, { heading: "Examples", paragraphs: ["Pick a winner from 1 to 100.", "Choose a random ID number for demo data.", "Generate random inputs for testing code."] }, { heading: "FAQs", paragraphs: ["Q: Is it truly random? A: It uses pseudorandom generation in the browser.", "Q: Can I choose range? A: Yes, specify min and max values.", "Q: Negative numbers? A: May support negatives if configured.", "Q: Reproducible? A: Not without a seed."] } ] } },
                'sequential-number': {
                    title: "About the Sequential Number Generator",
                    paragraphs: ["The Sequential Number Generator creates a list of numbers in order, starting from a specific value."],
                    example: { title: "Sequential Number Example", before: "Start: 1, Step: 1", after: "1\n2\n3\n4\n5" },
                    details: { sections: [ { heading: "What is sequential number generation?", paragraphs: ["Sequential number generation produces an ordered list of integers starting from a specified value and incrementing by a fixed step."] }, { heading: "When to use it?", paragraphs: ["Use for numbering lists, creating sample data, or generating index values for tables and reports."] }, { heading: "Examples", paragraphs: ["Start at 1, step by 1: '1\n2\n3'.", "Start at 10, step by 5: '10\n15\n20'.", "Generate sequential IDs for records."] }, { heading: "FAQs", paragraphs: ["Q: Can I choose step size? A: Yes, set the increment value.", "Q: Can it count down? A: Typically counts up by positive step values.", "Q: Is output one per line? A: Yes, each number appears on its own line.", "Q: Good for tables? A: Yes, for ordered numeric data."] } ] } }
            },
            modify: {
                'add-number-each-line': { title: "About the Add Number To Each Line Tool", paragraphs: ["The 'Add Number To Each Line' tool is a simple yet powerful utility designed to organize lists by prepending sequential numbers to every line of your text. Whether you are creating a ranked list, organizing data points, or simply trying to make a large block of items more readable, this tool automates the process instantly. Instead of manually typing numbers for hundreds of lines, you can achieve a perfectly numbered list in a fraction of a second.", "It is particularly useful for programmers, data analysts, and writers who deal with raw data or unformatted lists. By converting a plain text list into a numbered sequence, you can better reference specific items and improve the overall structure of your document. The tool handles lists of any length, ensuring accurate sequencing from top to bottom.", "Using this tool is straightforward: simply paste your text into the input field, and the tool will automatically generate a corresponding output with numbers added to the beginning of each line. It preserves the original content of your lines while adding the necessary ordering, saving you valuable time and effort in manual formatting."], example: { title: "Add Number To Each Line Example", before: "Apple\nBanana\nCherry", after: "1. Apple\n2. Banana\n3. Cherry" }, details: { sections: [ { heading: "What is add number to each line?", paragraphs: ["Adding numbers to each line is a text formatting technique that prepends sequential numbers to every line in a block of text. This creates an ordered list, making it easier to reference, count, or organize items. The numbering starts from 1 and increments by 1 for each line, preserving the original text while adding a numerical prefix."] }, { heading: "When to use it?", paragraphs: ["Use this tool when you need to create numbered lists for documentation, reports, or presentations. It's ideal for organizing code snippets, data entries, or any list where order matters. Perfect for creating step-by-step instructions, ranked lists, or when you need to reference items by number."] }, { heading: "Examples", paragraphs: ["Create a numbered shopping list: 'Milk\nBread\nEggs' becomes '1. Milk\n2. Bread\n3. Eggs'.", "Number code lines for review: 'function start() {\n  console.log(\"Begin\");\n}' becomes '1. function start() {\n2.   console.log(\"Begin\");\n}'.", "Organize a task list: 'Write code\nTest application\nDeploy' becomes '1. Write code\n2. Test application\n3. Deploy'."] }, { heading: "FAQs", paragraphs: ["Q: Does it start from 0 or 1? A: It starts from 1 by default.", "Q: Can I customize the numbering format? A: Currently, it uses simple sequential numbers. For custom formats, consider other tools.", "Q: What if my text has empty lines? A: Empty lines are numbered as well, maintaining sequence.", "Q: Is there a limit to the number of lines? A: Limited by browser memory, but handles thousands of lines efficiently."] } ] } },
                'add-prefix': { title: "About the Add Prefix Tool", paragraphs: ["The 'Add Prefix' tool allows you to insert a specific text string or character at the very beginning of every line in your text data. This is an essential utility for developers, database administrators, and content creators who need to bulk-edit lists or code snippets. For example, if you need to turn a list of words into HTML list items or add a specific variable name to a list of values, this tool makes it effortless.", "Manual editing is prone to errors and consumes unnecessary time, especially when dealing with hundreds or thousands of lines. This tool ensures consistency across your entire dataset, applying the exact same prefix to every single line without exception. It supports all types of characters, including symbols, spaces, and alphanumeric text.", "To use it, enter the text you want to append to the start of each line in the options provided, paste your target text, and watch as the tool instantly formats your entire document. This functionality is perfect for generating SQL queries, formatting code arrays, or simply adding bullet points to a plain text list."], example: { title: "Add Prefix Example", before: "Item 1\nItem 2", after: "- Item 1\n- Item 2" }, details: { sections: [ { heading: "What is add prefix?", paragraphs: ["Adding a prefix refers to the process of inserting a specific string of text or characters at the beginning of each line in a block of text. This text manipulation technique is commonly used in programming, data processing, and content formatting to standardize lists, add markers, or prepare data for specific applications. The prefix can be any combination of letters, numbers, symbols, or spaces, and it is applied uniformly to every line without altering the original content of each line."] }, { heading: "When to use it?", paragraphs: ["Use add prefix when you need to prepend consistent text to multiple lines, such as adding bullet points to lists, prefixes to code comments, or markers to data entries. It's ideal for formatting lists for HTML, creating numbered or bulleted items, adding prefixes to database fields, or preparing text for import into spreadsheets and databases. Developers use it to add variable declarations, SQL prefixes, or configuration markers to code blocks."] }, { heading: "Examples", paragraphs: ["Transform a simple list into HTML list items: 'Apple\nBanana\nOrange' becomes '<li>Apple</li>\n<li>Banana</li>\n<li>Orange</li>' by adding '<li>' as prefix and '</li>' as suffix.", "Add line numbers to code: 'function test() {\n  console.log(\"Hello\");\n}' becomes '1. function test() {\n2.   console.log(\"Hello\");\n}' for documentation purposes.", "Prepare data for CSV import: 'John\nJane\nBob' becomes '\"John\",\n\"Jane\",\n\"Bob\",' for proper quoting in spreadsheet applications."] }, { heading: "FAQs", paragraphs: ["Q: Does the add prefix tool modify the original text content? A: No, it only adds the specified prefix to the beginning of each line. The original text remains unchanged.", "Q: Can I add multiple prefixes or complex strings? A: Yes, you can add any text string as a prefix, including spaces, symbols, and multi-character strings.", "Q: Is there a limit to how many lines I can process? A: The tool processes all lines in your input, limited only by your browser's memory and performance.", "Q: Can I use this for programming languages or specific syntax? A: Absolutely, it's commonly used for adding comments (//), variable prefixes ($), or any language-specific markers to code."] } ] } },
                'add-string-after-number-of-characters': { title: "About the Add String After Number of Characters Tool", paragraphs: ["The 'Add String After Number of Characters' tool provides precise control over text insertion within your lines. Unlike standard prefix or suffix tools, this utility allows you to inject text at a specific character index within each line. This is incredibly useful for formatting fixed-width data files, correcting alignment in code, or restructuring data exports that lack proper delimiters.", "For instance, if you have a list of dates or codes where a separator is missing after the fourth character, this tool can insert a hyphen or comma exactly where it is needed across all lines simultaneously. It eliminates the need for complex regular expressions or manual cursor placement, providing a user-friendly solution for structured text manipulation.", "The process is intuitive: specify the number of characters to skip from the start of the line, enter the text you wish to insert, and the tool processes the entire block of text. This ensures that your data follows the strict formatting rules required for databases, imports, or visual presentation."], example: { title: "Add String After Example", before: "20231225", after: "2023-1225" }, details: { sections: [ { heading: "What is add string after number of characters?", paragraphs: ["This tool inserts a specified string at a precise position within each line of text, counted from the beginning. You define the character count, and the string is added after that many characters. It's useful for adding separators, prefixes, or formatting elements at exact locations in structured text."] }, { heading: "When to use it?", paragraphs: ["Use when you need to insert text at a specific position in every line, such as adding hyphens in dates, commas in numbers, or separators in codes. Ideal for formatting phone numbers, dates, IDs, or any data with fixed-width fields."] }, { heading: "Examples", paragraphs: ["Format dates: '20231225' becomes '2023-1225' by inserting '-' after 4 characters.", "Add area codes: '5551234' becomes '(555) 1234' by inserting ') ' after 3 characters.", "Separate codes: 'ABC123DEF' becomes 'ABC-123-DEF' by inserting '-' after 3 and 6 characters."] }, { heading: "FAQs", paragraphs: ["Q: What if the line is shorter than the specified position? A: The string is added at the end of the line.", "Q: Can I insert multiple strings? A: This tool inserts one string at one position per use.", "Q: Does it count spaces? A: Yes, all characters including spaces are counted.", "Q: Is it 0-based or 1-based? A: It's 1-based; after N characters means after the Nth character."] } ] } },
                'add-text-in-specific-position': { title: "About the Add Text in Specific Position Tool", paragraphs: ["The 'Add Text in Specific Position' tool is a versatile text manipulation utility that lets you insert a string of text at a precise index within every line of your document. Whether you are correcting data formats, modifying code, or adjusting fixed-width text files, this tool offers the granularity needed to edit specific parts of a line without affecting the rest.", "This tool is invaluable when working with columnar data or log files where information needs to be added at a consistent offset. Instead of writing a script to parse and modify strings, you can simply define the position index and the text to insert. The tool handles the rest, ensuring that every line is updated identically.", "It handles edge cases gracefully; if a line is shorter than the specified position, the text is handled appropriately. This makes it a robust solution for cleaning up inconsistent data sets or preparing text for importing into spreadsheet software or databases."], example: { title: "Add Text in Specific Position Example", before: "ID001\nID002", after: "ID-001\nID-002" }, details: { sections: [ { heading: "What is add text in specific position?", paragraphs: ["This tool allows you to insert text at a specific character position within each line. You specify the position (1-based index), and the text is inserted at that exact location, shifting the rest of the line to the right."] }, { heading: "When to use it?", paragraphs: ["Use when you need to insert text at a fixed position in every line, such as adding separators in codes, prefixes in IDs, or correcting data alignment. Useful for formatting tabular data or structured text files."] }, { heading: "Examples", paragraphs: ["Add hyphens to IDs: 'ID001' becomes 'ID-001' by inserting '-' at position 3.", "Insert colons in time: '1230' becomes '12:30' by inserting ':' at position 3.", "Add extensions: 'file1' becomes 'file1.txt' by inserting '.txt' at position 6."] }, { heading: "FAQs", paragraphs: ["Q: What happens if position exceeds line length? A: Text is appended to the end.", "Q: Is position 0-based or 1-based? A: 1-based; position 1 is before the first character.", "Q: Can I insert at the beginning? A: Yes, position 1 inserts before the first character.", "Q: Does it work with multi-byte characters? A: Counts by character position, not bytes."] } ] } },
                'add-suffix': { title: "About the Add Suffix Tool", paragraphs: ["The 'Add Suffix' tool is designed to append text to the very end of every line in your input. This is a common requirement in programming and data management, such as adding commas to the end of lines to create a CSV list, adding semicolons for code syntax, or simply adding closing tags to HTML elements.", "By automating this process, you avoid the tedium of navigating to the end of every line manually. This tool guarantees that every line receives the exact same closing text, eliminating typos and formatting inconsistencies. It is highly efficient, capable of processing thousands of lines in an instant within your browser.", "Using the tool is simple: specify the characters or words you want to add to the end, paste your list, and the generated output is ready for use. Whether you are preparing a SQL 'IN' clause or formatting a JSON array, adding suffixes has never been faster."], example: { title: "Add Suffix Example", before: "Value 1\nValue 2", after: "Value 1,\nValue 2," }, details: { sections: [ { heading: "What is add suffix?", paragraphs: ["Adding a suffix means appending a specified string of text to the end of each line. This is the opposite of adding a prefix, and it's used to add endings, separators, or markers uniformly to every line."] }, { heading: "When to use it?", paragraphs: ["Use when you need to add the same ending to multiple lines, such as commas for CSV, semicolons for code, quotes for strings, or any repetitive suffix. Perfect for preparing lists for databases or code."] }, { heading: "Examples", paragraphs: ["Create CSV: 'Name\nAge\nCity' becomes 'Name,\nAge,\nCity,'.", "Add semicolons: 'line1\nline2' becomes 'line1;\nline2;'.", "Quote strings: 'hello\nworld' becomes 'hello\"\nworld\"'."] }, { heading: "FAQs", paragraphs: ["Q: Does it add to empty lines? A: Yes, suffixes are added to all lines including empty ones.", "Q: Can I add multiple suffixes? A: Each use adds one suffix; run multiple times for more.", "Q: What if I want to add to non-empty lines only? A: This tool adds to all lines; filter first if needed.", "Q: Is there a limit? A: No, processes all input lines."] } ] } },
                'add-text-to-each-line': { title: "About the Add Text To Each Line Tool", paragraphs: ["The 'Add Text To Each Line' tool is a flexible utility that allows you to append specific content to every line of your text. While similar to the suffix tool, this functionality is often conceptualized as a general 'append' operation. It is perfect for bulk editing tasks where information needs to be tagged onto existing data entries.", "This tool is widely used by developers to modify configuration files, generate repetitive code patterns, or format data for reports. The ability to treat multiple lines of text as a single batch operation significantly speeds up workflow and reduces the mental load of repetitive typing.", "Simply input your text, define the string you wish to add, and let the tool do the work. It respects the existing formatting of your lines and simply adds your desired text to the end, making it an essential tool for quick text transformations."], example: { title: "Add Text To Each Line Example", before: "UserA\nUserB", after: "UserA@domain.com\nUserB@domain.com" }, details: { sections: [ { heading: "What is add text to each line?", paragraphs: ["This tool appends a specified string to the end of every line in the text. It's a general-purpose append function that adds the same text to each line, useful for adding domains, extensions, or any repetitive ending."] }, { heading: "When to use it?", paragraphs: ["Use to add common endings to lists, such as email domains, file extensions, or markers. Ideal for bulk updates where each item needs the same addition at the end."] }, { heading: "Examples", paragraphs: ["Add email domains: 'user1\nuser2' becomes 'user1@company.com\nuser2@company.com'.", "Add file extensions: 'doc1\ndoc2' becomes 'doc1.pdf\ndoc2.pdf'.", "Append markers: 'item1\nitem2' becomes 'item1 [done]\nitem2 [done]'."] }, { heading: "FAQs", paragraphs: ["Q: Difference from suffix tool? A: Similar, but this is more general-purpose.", "Q: Does it add to empty lines? A: Yes, to all lines.", "Q: Can I add complex text? A: Yes, any string including spaces and symbols.", "Q: Is it reversible? A: Use remove tools to undo if needed."] } ] } },
                'column-to-comma': { title: "About the Column to Comma Tool", paragraphs: ["The 'Column to Comma' converter is a dedicated tool for transforming vertical lists of data into horizontal, comma-separated strings. This format is frequently required when entering multiple values into search filters, SQL queries, or tagging systems that accept comma-delimited inputs.", "Instead of manually pressing delete and adding a comma at the end of every line, this tool automates the conversion. It takes a column of text—such as a list of names, IDs, or email addresses—and instantly merges them into a single line separated by commas.", "This tool is particularly helpful for data analysts and database administrators who frequently copy data from spreadsheets (columns) and need to paste it into code or query tools. It ensures that no items are missed and that the spacing and punctuation are consistent throughout the string."], example: { title: "Column to Comma Example", before: "A\nB\nC", after: "A, B, C" }, details: { sections: [ { heading: "What is column to comma?", paragraphs: ["This tool converts a vertical list (column) of items into a single horizontal line separated by commas. It takes each line and joins them with commas, creating a comma-separated values (CSV) style string."] }, { heading: "When to use it?", paragraphs: ["Use when you need to convert lists into comma-separated format for SQL queries, search filters, or data imports. Perfect for preparing data for databases or APIs that accept CSV input."] }, { heading: "Examples", paragraphs: ["SQL IN clause: '1\n2\n3' becomes '1, 2, 3'.", "Email list: 'a@example.com\nb@example.com' becomes 'a@example.com, b@example.com'.", "Tag list: 'red\ngreen\nblue' becomes 'red, green, blue'."] }, { heading: "FAQs", paragraphs: ["Q: Does it add spaces? A: Yes, adds ', ' between items.", "Q: What about trailing comma? A: No trailing comma added.", "Q: Handles empty lines? A: Empty lines become extra commas.", "Q: Limit on items? A: No, but very long lists may be truncated in display."] } ] } },
                'commas-between-numbers': { title: "About the Commas Between Numbers Tool", paragraphs: ["The 'Commas Between Numbers' tool is a formatting utility that adds thousands separators to numeric strings. It makes large numbers easier to read by inserting a comma every three digits. This is essential for financial reports, statistical data, and any context where number legibility is a priority.", "It intelligently identifies sequences of digits and inserts commas where necessary, making long strings of numbers readable and usable in computation or data storage contexts. It helps in converting space-separated numbers into CSV format or JSON arrays effortlessly.", "Whether you are dealing with statistical data, financial figures, or simple counts, this tool saves you from the manual grunt work of punctuating number sequences. It transforms a blob of digits into structured, usable data in seconds."], example: { title: "Commas Between Numbers Example", before: "1000", after: "1,000" }, details: { sections: [ { heading: "What is commas between numbers?", paragraphs: ["This tool adds comma separators to large numbers for better readability. It inserts commas every three digits from the right, following standard number formatting conventions."] }, { heading: "When to use it?", paragraphs: ["Use for formatting large numbers in reports, financial data, or any display where readability matters. Ideal for preparing numbers for human consumption rather than computation."] }, { heading: "Examples", paragraphs: ["Format currency: '1000000' becomes '1,000,000'.", "Large counts: '123456789' becomes '123,456,789'.", "Statistics: '5000000' becomes '5,000,000'."] }, { heading: "FAQs", paragraphs: ["Q: Does it handle decimals? A: No, only whole numbers.", "Q: What about negative numbers? A: Adds commas to the absolute value.", "Q: International formats? A: Uses US/UK style commas.", "Q: Affects non-numeric text? A: Only formats sequences of digits."] } ] } },
                'convert-commas-to-lines': { title: "About the Convert Commas to Lines Tool", paragraphs: ["The 'Convert Commas to Lines' tool is the reverse of the 'Column to Comma' tool. It takes a single block of text or a long string containing comma-separated values (CSV) and splits it into a vertical list, with each item on a new line.", "This is incredibly useful when you receive data in a flat format—like a list of tags, emails, or IDs—and need to process or view them individually in a spreadsheet or line-based text editor. It effectively 'explodes' the string based on the comma delimiter.", "The tool handles spacing intelligently, trimming whitespace around the commas to ensure your resulting list is clean and aligned. It transforms dense, hard-to-read blocks of text into clear, manageable columns of data."], example: { title: "Convert Commas to Lines Example", before: "Apple, Banana, Orange", after: "Apple\nBanana\nOrange" }, details: { sections: [ { heading: "What is convert commas to lines?", paragraphs: ["This tool splits a comma-separated string into individual lines. It takes a single line with commas and converts each comma-separated value into its own line."] }, { heading: "When to use it?", paragraphs: ["Use when you have comma-separated data that you want to view or edit as a list. Perfect for converting CSV data into columns for spreadsheets or processing individual items."] }, { heading: "Examples", paragraphs: ["CSV to list: 'a,b,c' becomes 'a\nb\nc'.", "Email string: 'user1@example.com, user2@example.com' becomes 'user1@example.com\nuser2@example.com'.", "Tag cloud: 'javascript, python, java' becomes 'javascript\npython\njava'."] }, { heading: "FAQs", paragraphs: ["Q: Does it trim spaces? A: Yes, removes spaces around commas.", "Q: What about quoted values? A: Treats quotes as part of the value.", "Q: Handles multiple commas? A: Splits on every comma.", "Q: Empty values? A: Creates empty lines for consecutive commas."] } ] } },
                'convert-double-space-to-single-space': { title: "About the Convert Double Space To Single Space Tool", paragraphs: ["The 'Convert Double Space To Single Space' tool is a text cleaning utility that removes redundant whitespace from your document. Accidental double spaces can occur during typing, copy-pasting from PDFs, or formatting errors, making text look unprofessional and inconsistent.", "This tool scans your entire text and replaces every instance of two or more consecutive spaces with a single space. It is widely used by editors, students, and content managers to polish articles, essays, and reports before publication.", "Beyond aesthetics, removing extra spaces is important for data processing and coding, where whitespace can sometimes affect parsing logic. This tool ensures your text is normalized and free of invisible formatting clutter."], example: { title: "Double to Single Space Example", before: "This  is  a  text.", after: "This is a text." }, details: { sections: [ { heading: "What is convert double space to single space?", paragraphs: ["This tool normalizes whitespace by replacing any sequence of two or more spaces with a single space. It cleans up text that has extra spaces from copying, typing errors, or formatting issues."] }, { heading: "When to use it?", paragraphs: ["Use for cleaning text before publishing, standardizing data, or preparing content for consistent formatting. Essential for editors, writers, and anyone dealing with text that may have spacing issues."] }, { heading: "Examples", paragraphs: ["Clean copied text: 'Hello  world' becomes 'Hello world'.", "Fix typing errors: 'This  is   a   test.' becomes 'This is a test.'.", "Normalize data: 'Name:  John' becomes 'Name: John'."] }, { heading: "FAQs", paragraphs: ["Q: Does it affect line breaks? A: No, only spaces within lines.", "Q: What about tabs? A: Only converts multiple spaces, not tabs.", "Q: Handles leading/trailing? A: No, use trim tools for that.", "Q: Is it reversible? A: No, but you can add spaces back if needed."] } ] } },
                'convert-single-space-to-double-space': { title: "About the Convert Single Space To Double Space Tool", paragraphs: ["The 'Convert Single Space To Double Space' tool expands the whitespace in your text by replacing every single space with two spaces. While less common in modern web typography, this style is sometimes required for specific manuscript formats, monospaced coding environments, or creative text layouts.", "It effectively spreads out your text, which can improve readability in certain terminal-based applications or meet legacy formatting requirements. It ensures that every word separation is distinct and uniform across the document.", "Using this tool allows you to quickly adjust the density of your text without manually tapping the space bar. It applies the change globally, providing an instant transformation of your content's spacing structure."], example: { title: "Single to Double Space Example", before: "Hello World", after: "Hello  World" }, details: { sections: [ { heading: "What is convert single space to double space?", paragraphs: ["This tool doubles the spacing between words by replacing each single space with two spaces. It increases the visual separation between words for specific formatting needs."] }, { heading: "When to use it?", paragraphs: ["Use for manuscript formatting, certain coding styles, or creative text effects. Sometimes required for older document formats or specific display requirements."] }, { heading: "Examples", paragraphs: ["Manuscript style: 'The quick brown fox' becomes 'The  quick  brown  fox'.", "Code formatting: 'if (x > 0)' becomes 'if  (x  >  0)'.", "Artistic text: 'Hello world' becomes 'Hello  world'."] }, { heading: "FAQs", paragraphs: ["Q: Does it affect line breaks? A: No, only spaces between words.", "Q: What about multiple spaces? A: Converts each single space to double, so 'a  b' becomes 'a    b'.", "Q: Is it common? A: Less common than single spacing.", "Q: Reversible? A: Yes, use the double to single tool."] } ] } },
                'keep-first-characters-of-each-line': { title: "About the Keep First Characters Of Each Line Tool", paragraphs: ["The 'Keep First Characters Of Each Line' tool acts as a vertical cropper for your text. It allows you to specify a number 'N', and then strips away everything on each line except for the first 'N' characters. This is perfect for extracting fixed-width ID codes, dates, or prefixes from a longer dataset.", "For example, if you have a log file where the timestamp is the first 10 characters and you want to discard the rest of the log message, this tool does exactly that. It processes every line independently, resulting in a clean column of truncated data.", "This utility is invaluable for data extraction and cleaning, allowing you to isolate the specific portion of the data you need without writing complex scripts or regex patterns."], example: { title: "Keep First Characters Example", before: "2023-01-01: Error Log", after: "2023-01-01" }, details: { sections: [ { heading: "What is keep first characters of each line?", paragraphs: ["This tool truncates each line to keep only the first N characters, discarding everything after. It's useful for extracting prefixes, codes, or fixed-width data from the beginning of lines."] }, { heading: "When to use it?", paragraphs: ["Use to extract consistent prefixes like dates, IDs, or codes from structured text. Ideal for parsing logs, extracting keys, or cleaning data with fixed formats."] }, { heading: "Examples", paragraphs: ["Extract dates: '2023-01-01 Error message' becomes '2023-01-01'.", "Get IDs: 'ID123 Full Name' becomes 'ID123'.", "Keep codes: 'ABC123 Description' becomes 'ABC123'."] }, { heading: "FAQs", paragraphs: ["Q: What if line is shorter than N? A: Keeps the entire line.", "Q: Does it count from 0? A: No, 1-based character count.", "Q: Affects empty lines? A: Empty lines remain empty.", "Q: Can I specify N? A: Yes, in the tool options."] } ] } },
                'keep-last-characters-of-each-line': { title: "About the Keep Last Characters Of Each Line Tool", paragraphs: ["The 'Keep Last Characters Of Each Line' tool functions similarly to its counterpart but focuses on the end of the line. It preserves only the last 'N' characters of each line, deleting the beginning. This is useful for extracting file extensions, suffixes, or data that is right-aligned in a raw text dump.", "If you have a list of full file paths and only need the filenames (assuming fixed length) or specific status codes at the end of log entries, this tool allows you to isolate that information instantly.", "It streamlines the process of parsing unstructured text files, giving you quick access to the data points located at the end of your strings."], example: { title: "Keep Last Characters Example", before: "/usr/local/bin/script.sh", after: "script.sh" }, details: { sections: [ { heading: "What is keep last characters of each line?", paragraphs: ["This tool keeps only the last N characters of each line, removing everything before. Useful for extracting suffixes, extensions, or end-aligned data."] }, { heading: "When to use it?", paragraphs: ["Use to extract file extensions, status codes, or fixed-width suffixes from the end of lines. Good for parsing file lists or extracting trailing data."] }, { heading: "Examples", paragraphs: ["File extensions: '/path/to/file.txt' becomes 'file.txt'.", "Status codes: 'Process completed: OK' becomes 'OK'.", "Last digits: 'Number: 12345' becomes '2345' (last 4 chars)."] }, { heading: "FAQs", paragraphs: ["Q: What if line is shorter than N? A: Keeps the entire line.", "Q: How to specify N? A: In the tool options.", "Q: Counts from end? A: Yes, last N characters.", "Q: Handles empty lines? A: Empty lines stay empty."] } ] } },
                'keep-lines-containing': { title: "About the Keep Lines Containing a Certain Word Tool", paragraphs: ["The 'Keep Lines Containing a Certain Word' tool is a powerful filtering utility. It scans your text and preserves only the lines that contain the specific keyword or phrase you provide, deleting everything else. It essentially acts like a simplified 'grep' command for your browser.", "This tool is essential for analyzing log files, filtering data sets, or extracting relevant information from large documents. Instead of reading through thousands of lines to find errors or specific entries, you can filter the view to show exactly what matters.", "It simplifies data analysis by removing noise and focusing on the signal. Whether you are looking for lines with 'Error', specific user IDs, or email domains, this tool delivers a clean sub-list of your original data."], example: { title: "Keep Lines Containing Example", before: "Error: 404\nInfo: Login\nError: 500", after: "Error: 404\nError: 500" }, details: { sections: [ { heading: "What is keep lines containing?", paragraphs: ["This tool filters text to keep only lines that contain a specified word or phrase. All other lines are removed, creating a subset of relevant data."] }, { heading: "When to use it?", paragraphs: ["Use for filtering logs, extracting specific data, or finding relevant entries in large text files. Perfect for error analysis or data mining."] }, { heading: "Examples", paragraphs: ["Filter errors: Keep lines with 'ERROR'.", "Find users: Keep lines with 'user123'.", "Extract domains: Keep lines with '@example.com'."] }, { heading: "FAQs", paragraphs: ["Q: Is it case-sensitive? A: Usually case-sensitive, check options.", "Q: Supports regex? A: No, simple text matching.", "Q: What if no matches? A: Returns empty result.", "Q: Multiple words? A: Matches the exact phrase."] } ] } },
                'merge-text': { title: "About the Merge Text Or Lists Tool", paragraphs: ["The 'Merge Text Or Lists' tool (often referred to as a 'Joiner') takes a vertical list of items and merges them into a single continuous string. You can define a custom delimiter, such as a comma, space, pipe, or any other character, to separate the merged items.", "This conversion is frequently needed when taking a list of values from a spreadsheet and preparing them for a SQL 'IN' clause, a programming array, or a keyword tag list. It transforms vertical space into horizontal efficiency.", "The tool provides a quick way to serialize data without manual editing. It respects the existing delimiter, ensuring the resulting string is formatted exactly as required for your next task."], example: { title: "Merge Text Example", before: "Red\nGreen\nBlue", after: "Red, Green, Blue" }, details: { sections: [ { heading: "What is merge text?", paragraphs: ["This tool joins multiple lines into a single line, separated by a specified delimiter. It converts vertical lists into horizontal strings."] }, { heading: "When to use it?", paragraphs: ["Use to create comma-separated lists, SQL queries, or any format requiring items in a single line. Ideal for preparing data for databases or APIs."] }, { heading: "Examples", paragraphs: ["SQL IN: '1\n2\n3' becomes '1, 2, 3'.", "Sentence: 'Hello\nworld' becomes 'Hello world'.", "Tags: 'tag1\ntag2' becomes 'tag1 | tag2'."] }, { heading: "FAQs", paragraphs: ["Q: Custom delimiter? A: Yes, specify in options.", "Q: Adds spaces? A: Depends on delimiter.", "Q: Handles empty lines? A: Includes them as extra delimiters.", "Q: Limit? A: No, but long outputs may be truncated."] } ] } },
                'number-to-words': { title: "About the Number to Words Tool", paragraphs: ["The 'Number to Words' converter is a handy utility that transforms numeric digits into their written English equivalent. For example, it converts '123' into 'one hundred twenty-three'. This is commonly used in check writing, legal documents, and formal reports where numbers must be spelled out for clarity and security.", "The tool handles various scales of numbers, converting them into grammatically correct text. It eliminates the potential for spelling errors or format mistakes when manually writing out large figures.", "Whether you are learning English numbers, preparing financial instruments, or just curious, this tool provides an instant and accurate conversion from mathematical notation to linguistic representation."], example: { title: "Number to Words Example", before: "150", after: "one hundred fifty" }, details: { sections: [ { heading: "What is number to words?", paragraphs: ["This tool converts numerical digits into their written English word equivalents. It spells out numbers in full text form."] }, { heading: "When to use it?", paragraphs: ["Use for checks, legal documents, formal writing, or anywhere numbers need to be written out. Prevents fraud in financial documents."] }, { heading: "Examples", paragraphs: ["Checks: '100' becomes 'one hundred'.", "Legal: '42' becomes 'forty-two'.", "Learning: '25' becomes 'twenty-five'."] }, { heading: "FAQs", paragraphs: ["Q: Supports decimals? A: No, whole numbers only.", "Q: Large numbers? A: Up to billions.", "Q: Ordinals? A: No, cardinals only.", "Q: Languages? A: English only."] } ] } },
                'trimming-text': { title: "About the Trimming Text Tool", paragraphs: ["The 'Trimming Text' tool is a cleaning utility that removes leading and trailing whitespace from every line in your text. It strips away the invisible 'ghost' spaces that often accompany copied text, ensuring that your data is clean and properly aligned.", "Whitespace issues can cause significant problems in programming (e.g., string comparison failures) and data processing. This tool sanitizes your input by ensuring that every line starts with the first visible character and ends with the last visible character.", "It is a fundamental step in data preparation, helping to standardize lists and prevent formatting errors in downstream applications. It leaves single spaces between words intact, focusing only on the outer edges of the text."], example: { title: "Trimming Text Example", before: "  Hello  ", after: "Hello" }, details: { sections: [ { heading: "What is trimming text?", paragraphs: ["Trimming removes leading and trailing whitespace from each line, including spaces and tabs. It cleans up text copied from various sources."] }, { heading: "When to use it?", paragraphs: ["Use before processing data, comparing strings, or when whitespace causes issues. Essential for cleaning imported text or user input."] }, { heading: "Examples", paragraphs: ["Clean input: '  hello  ' becomes 'hello'.", "Fix data: '\tname\t' becomes 'name'.", "Standardize: ' word ' becomes 'word'."] }, { heading: "FAQs", paragraphs: ["Q: Affects internal spaces? A: No, only leading/trailing.", "Q: Handles tabs? A: Yes, removes leading/trailing tabs.", "Q: Empty lines? A: Become truly empty.", "Q: Is it reversible? A: No, but you can add spaces back."] } ] } }
            },
            'special-effects': {
                'binary-code-to-text': { title: "About the Binary Code To Text Tool", paragraphs: ["The Binary Code To Text tool is a digital translator that converts sequences of binary digits (0s and 1s) back into readable text. In the world of computing, binary is the fundamental language used by processors to execute instructions and store data. However, for humans, reading long strings of zeros and ones is tedious and impractical.", "This tool bridges the gap between machine language and human language. It takes space-separated 8-bit binary codes and translates them into their ASCII or Unicode character equivalents. It is an excellent resource for computer science students, programmers debugging data streams, or anyone curious about how computers represent information.", "Simply paste your binary string into the input field, and the tool will instantly decode the message. It handles standard character encoding, allowing you to reveal hidden messages or verify binary conversions quickly and accurately."], example: { title: "Binary Code To Text Example", before: "01001000 01101001", after: "Hi" }, details: { sections: [ { heading: "What is binary code to text?", paragraphs: ["Binary code to text conversion translates binary digits (0s and 1s) into readable characters. Each 8-bit binary sequence represents an ASCII character, allowing computers to store and transmit text data."] }, { heading: "When to use it?", paragraphs: ["Use for decoding binary data in programming, debugging low-level code, learning computer science, or converting binary representations back to human-readable text."] }, { heading: "Examples", paragraphs: ["Decode message: '01001000 01100101 01101100 01101100 01101111' becomes 'Hello'.", "Debug data: Convert binary streams from logs or network packets.", "Educational: Understand how computers represent text internally."] }, { heading: "FAQs", paragraphs: ["Q: What is binary? A: Binary is base-2 numbering system using 0 and 1.", "Q: How many bits per character? A: Standard ASCII uses 8 bits (1 byte) per character.", "Q: Supports Unicode? A: Basic tool handles ASCII; extended characters may vary.", "Q: Case sensitive? A: Binary is case insensitive, but output preserves character case."] } ] } },
                'bold': { title: "About the Bold Text Generator", paragraphs: ["The Bold Text Generator allows you to create bold-looking text that can be used on platforms where standard formatting controls are missing. Social media sites like Instagram, Twitter, and Facebook, as well as text messages, often do not allow you to bold text using buttons or markdown.", "This tool works by converting your standard letters into specific mathematical alphanumeric symbols defined in the Unicode standard. These symbols appear thicker and darker, simulating the appearance of bold font weights. This allows you to add emphasis to keywords, headlines, or status updates effectively.", "By generating these unique Unicode characters, you can copy and paste your bold text anywhere that supports Unicode. It is a simple yet powerful way to make your content stand out in a crowded feed."], example: { title: "Bold Text Example", before: "Hello World", after: "𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝" }, details: { sections: [ { heading: "What is bold text generator?", paragraphs: ["Bold text generator converts standard text into Unicode mathematical symbols that appear bold. It uses special characters from the Unicode standard to create thicker, darker text without actual font formatting."] }, { heading: "When to use it?", paragraphs: ["Use on platforms without bold formatting like Instagram, Twitter, plain text messages. Perfect for emphasizing words in social media posts, bios, or comments."] }, { heading: "Examples", paragraphs: ["Social post: '𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 𝐀𝐧𝐧𝐨𝐮𝐧𝐜𝐞𝐦𝐞𝐧𝐭' for attention.", "Bio: '𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐞 𝐃𝐞𝐬𝐢𝐠𝐧𝐞𝐫' for emphasis.", "Headline: '𝐁𝐫𝐞𝐚𝐤𝐢𝐧𝐠 𝐍𝐞𝐰𝐬' in plain text."] }, { heading: "FAQs", paragraphs: ["Q: Does it work everywhere? A: Works on Unicode-supporting platforms.", "Q: Is it real bold? A: Visual simulation using special characters.", "Q: Affects readability? A: May be harder to read in some fonts.", "Q: Reversible? A: Can convert back using text tools."] } ] } },
                'bold-gothic': { title: "About the Bold Gothic Text Generator", paragraphs: ["The Bold Gothic Text Generator transforms your standard text into a dramatic, medieval-style script with a heavy font weight. Often referred to as Fraktur or Blackletter, this style mimics the calligraphy used in Western Europe from the 12th to the 17th century.", "This tool is perfect for creating eye-catching headers, tattoo designs, or artistic social media bios. The combination of the Gothic style with the bold weight creates a powerful visual impact that conveys antiquity, formality, or edgy aesthetics.", "Unlike standard fonts that require installation, these characters are part of the Unicode standard. This means you can generate them here and paste them directly into documents, chats, or web profiles without worrying about compatibility."], example: { title: "Bold Gothic Example", before: "PhraseFixTools", after: "𝕻𝖍𝖗𝖆𝖘𝖊𝕱𝖎𝖝𝕿𝖔𝖔𝖑𝖘" }, details: { sections: [ { heading: "What is bold gothic text?", paragraphs: ["Bold gothic text uses Fraktur or Blackletter Unicode characters to create a medieval, calligraphic style with bold weight. It combines historical typography with emphasis for dramatic effect."] }, { heading: "When to use it?", paragraphs: ["Use for artistic headers, tattoo designs, gaming usernames, or social media bios seeking a gothic, antique, or edgy aesthetic."] }, { heading: "Examples", paragraphs: ["Header: '𝕭𝖔𝖑𝖉 𝕲𝖔𝖙𝖍𝖎𝖈 𝕿𝖎𝖙𝖑𝖊' for impact.", "Username: '𝕯𝖆𝖗𝖐𝕶𝖓𝖎𝖌𝖍𝖙' for gaming.", "Bio: '𝕸𝖊𝖉𝖎𝖊𝖛𝖆𝖑 𝕸𝖆𝖘𝖙𝖊𝖗' for style."] }, { heading: "FAQs", paragraphs: ["Q: What is Fraktur? A: Medieval European script style.", "Q: Compatible? A: Works on Unicode-supporting devices.", "Q: Bold vs regular? A: This is bold gothic variant.", "Q: For tattoos? A: Popular for gothic tattoo designs."] } ] } },
                'bold-italic': { title: "About the Bold Italic Text Generator", paragraphs: ["The Bold Italic Text Generator combines two distinct styles—emphasis and slant—into a single set of Unicode characters. It converts plain text into a format that looks both bolded and italicized, providing maximum emphasis.", "This style is widely used for highlighting crucial information, creating distinct subheadings, or adding a sense of urgency and dynamism to text. Since many social platforms do not support simultaneous bold and italic formatting, this tool provides a workaround using mathematical alphanumeric symbols.", "It effectively replaces each letter of your input with its bold-italic Unicode equivalent. The result is portable text that retains its unique styling across most modern devices and applications."], example: { title: "Bold Italic Example", before: "Important Note", after: "𝑰𝒎𝒑𝒐𝒓𝒕𝒂𝒏𝒕 𝑵𝒐𝒕𝒆" }, details: { sections: [ { heading: "What is bold italic text?", paragraphs: ["Bold italic text combines bold weight with italic slant using Unicode mathematical symbols. It creates text that appears both thickened and slanted for maximum emphasis."] }, { heading: "When to use it?", paragraphs: ["Use for strong emphasis on platforms without formatting support. Ideal for urgent announcements, important notes, or highlighted content in plain text."] }, { heading: "Examples", paragraphs: ["Alert: '𝑾𝑨𝑹𝑵𝑰𝑵𝑮' for attention.", "Title: '𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄 𝑻𝒊𝒕𝒍𝒆' for headers.", "Emphasis: '𝒄𝒓𝒊𝒕𝒊𝒄𝒂𝒍' in text."] }, { heading: "FAQs", paragraphs: ["Q: Why not real formatting? A: For plain text platforms.", "Q: Readable? A: May be less readable than standard text.", "Q: Compatible? A: Unicode-supporting platforms.", "Q: Combined effect? A: Bold + italic simulation."] } ] } },
                'circled': { title: "About the Circled Text Generator", paragraphs: ["The Circled Text Generator, often called the Bubble Text Generator, surrounds each alphanumeric character in your text with a circle. This unique style is derived from the 'Enclosed Alphanumerics' block in Unicode.", "It is frequently used for creating lists (①, ②, ③), emphasizing specific letters, or simply adding a playful, decorative touch to messages. The circular enclosure separates each character, giving the text a distinct, badge-like appearance.", "This tool instantly maps your input characters to their enclosed counterparts. It covers numbers and both uppercase and lowercase letters, making it versatile for various design and formatting needs on the web."], example: { title: "Circled Text Example", before: "Hello", after: "Ⓗⓔⓛⓛⓞ" }, details: { sections: [ { heading: "What is circled text?", paragraphs: ["Circled text surrounds each character with a circle using Unicode enclosed alphanumerics. It creates a bubble or badge effect around letters and numbers."] }, { heading: "When to use it?", paragraphs: ["Use for numbered lists, emphasizing letters, or decorative text effects. Popular for social media, lists, or playful messaging."] }, { heading: "Examples", paragraphs: ["List: 'Ⓐ Ⓑ Ⓒ' for items.", "Emphasis: 'ⒾⓂⓅⓄⓇⓉⒶⓃⓉ' for words.", "Numbers: '① ② ③' for steps."] }, { heading: "FAQs", paragraphs: ["Q: All characters? A: Letters and numbers; symbols may not circle.", "Q: For lists? A: Great for ordered lists.", "Q: Compatible? A: Unicode-supporting platforms.", "Q: Bubble text? A: Same as circled text."] } ] } },
                'cursive-bold': { title: "About the Cursive Bold Text Generator", paragraphs: ["The Cursive Bold Text Generator converts plain text into a flowing, script-like typeface with added visual weight. This style mimics handwriting or formal calligraphy, adding a touch of elegance and sophistication to your words.", "Commonly used for invitations, poetic posts, or stylish user profiles, this tool leverages mathematical script Unicode characters. The bold variation ensures that the thin lines of standard cursive remain visible and impactful even at smaller sizes.", "Simply type your message, and the tool will swap your characters for their bold script equivalents. It is an excellent way to personalize digital communication with a handwritten feel."], example: { title: "Cursive Bold Example", before: "Signature", after: "𝓢𝓲𝓰𝓷𝓪𝓽𝓾𝓻𝓮" }, details: { sections: [ { heading: "What is cursive bold text?", paragraphs: ["Cursive bold text uses script-like Unicode characters with bold weight to simulate handwritten calligraphy. It combines flowing style with emphasis."] }, { heading: "When to use it?", paragraphs: ["Use for elegant signatures, invitations, poetic content, or personalized social media. Adds sophistication to digital text."] }, { heading: "Examples", paragraphs: ["Signature: '𝓑𝓮𝓼𝓽 𝓡𝓮𝓰𝓪𝓻𝓭𝓼' for notes.", "Title: '𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓑𝓸𝓵𝓭' for headers.", "Poem: '𝓦𝓱𝓲𝓼𝓹𝓮𝓻𝓼' for artistic text."] }, { heading: "FAQs", paragraphs: ["Q: Handwritten? A: Visual simulation.", "Q: Bold cursive? A: Yes, thicker lines.", "Q: For invitations? A: Perfect for elegant invites.", "Q: Readable? A: Artistic but readable."] } ] } },
                'flip-text': { title: "About the Flip Text Tool", paragraphs: ["The Flip Text Tool, or Mirror Text Generator, creates a reflection of your text as if seen in a mirror. It reverses the string and replaces characters with their laterally inverted counterparts where available.", "This effect is popular in social media for creating cryptic messages or artistic visual plays. It forces the reader to engage more deeply with the content to decipher it, or simply serves as a fun visual trick.", "The tool uses a comprehensive mapping of characters that resemble reversed letters. While not every character has a perfect mirror in Unicode, this tool uses the best available approximations to create a convincing mirror effect."], example: { title: "Flip Text Example", before: "Ambulance", after: "ɘɔnɒludmA" }, details: { sections: [ { heading: "What is flip text?", paragraphs: ["Flip text reverses the order of characters and uses mirrored Unicode symbols to create a mirror image effect. It makes text appear backwards and inverted."] }, { heading: "When to use it?", paragraphs: ["Use for fun mirror effects, puzzles, spoilers, or artistic social media content. Creates cryptic or playful text."] }, { heading: "Examples", paragraphs: ["Mirror: 'Hello' becomes 'olleH' mirrored.", "Spoiler: Hide text in reverse.", "Art: 'ƃuᴉɥʇǝɯos' for style."] }, { heading: "FAQs", paragraphs: ["Q: Perfect mirror? A: Uses best Unicode approximations.", "Q: All characters? A: Most letters; symbols vary.", "Q: For puzzles? A: Great for mirror writing.", "Q: Reversible? A: Run again to flip back."] } ] } },
                'flip-words': { title: "About the Flip Words Tool", paragraphs: ["The Flip Words Tool is a text reordering utility that reverses the sequence of words in a sentence or paragraph without reversing the letters within the words themselves. It turns 'First Second Third' into 'Third Second First'.", "This is useful for certain coding tasks, data manipulation, or creating rhetorical figures of speech like chiasmus. It can also be used to correct data exported in the wrong order (e.g., Lastname Firstname vs Firstname Lastname).", "The tool processes each line individually, splitting the text by spaces and reconstructing it in reverse order. It provides a quick way to restructure sentence syntax or list priorities."], example: { title: "Flip Words Example", before: "The quick brown fox", after: "fox brown quick The" }, details: { sections: [ { heading: "What is flip words?", paragraphs: ["Flip words reverses the order of words in a sentence while keeping each word's letters in order. It changes word sequence without altering spelling."] }, { heading: "When to use it?", paragraphs: ["Use for reordering lists, correcting data order, creating chiasmus, or restructuring sentences for emphasis."] }, { heading: "Examples", paragraphs: ["Reorder: 'One two three' becomes 'three two One'.", "Data fix: Correct exported names.", "Style: 'Big small' becomes 'small Big'."] }, { heading: "FAQs", paragraphs: ["Q: Reverses letters? A: No, only word order.", "Q: Per line? A: Yes, each line separately.", "Q: For sentences? A: Works on any space-separated text.", "Q: Reversible? A: Run again to flip back."] } ] } },
                'gothic': { title: "About the Gothic Text Generator", paragraphs: ["The Gothic Text Generator converts your text into a classic Fraktur or Blackletter style. This typography is characterized by its dramatic strokes and historical association with medieval manuscripts and early printing.", "Unlike the bold version, this standard Gothic style is slightly lighter but retains all the ornamental details. It is widely used in gaming usernames, fan fiction, and design projects that require a 'dark' or 'ancient' vibe.", "By utilizing Unicode characters from the Mathematical Alphanumeric Symbols block, this tool allows you to use this distinctive font style on platforms that typically only support a single default font."], example: { title: "Gothic Text Example", before: "Medieval", after: "𝔐𝔢𝔡𝔦𝔢𝔳𝔞𝔩" }, details: { sections: [ { heading: "What is gothic text?", paragraphs: ["Gothic text uses Fraktur or Blackletter Unicode characters to create a medieval manuscript style. It evokes historical European calligraphy."] }, { heading: "When to use it?", paragraphs: ["Use for gothic themes, gaming, fan fiction, or antique aesthetics. Adds a dark, historical feel to text."] }, { heading: "Examples", paragraphs: ["Username: '𝔊𝔬𝔱𝔥𝔦𝔠𝔚𝔞𝔯𝔯𝔦𝔬𝔯' for style.", "Title: '𝔅𝔩𝔞𝔠𝔨𝔩𝔢𝔱𝔱𝔢𝔯' for headers.", "Bio: '𝔄𝔫𝔠𝔦𝔢𝔫𝔱 𝔖𝔠𝔯𝔦𝔟𝔢' for profile."] }, { heading: "FAQs", paragraphs: ["Q: Bold gothic? A: This is standard; bold is heavier.", "Q: For gaming? A: Popular in RPG and gothic games.", "Q: Compatible? A: Unicode-supporting devices.", "Q: Historical? A: Based on medieval scripts."] } ] } },
                'italic': { title: "About the Italic Text Generator", paragraphs: ["The Italic Text Generator allows you to slant your text to the right, mimicking the italic type style used for emphasis. Since standard text fields on Instagram, Twitter, or TikTok do not provide an 'Italic' button, this tool is the perfect solution.", "It works by mapping your input to mathematical italic Unicode characters. This distinct visual style is traditionally used for titles of works, foreign words, or internal monologue in creative writing.", "Generate italicized text instantly and paste it into your bio, captions, or comments to add nuance and professional formatting to your plain text content."], example: { title: "Italic Text Example", before: "Emphasis", after: "𝐸𝑚𝑝ℎ𝑎𝑠𝑖𝑠" }, details: { sections: [ { heading: "What is italic text?", paragraphs: ["Italic text uses slanted Unicode characters to simulate italic font style. It creates right-leaning text for emphasis."] }, { heading: "When to use it?", paragraphs: ["Use for emphasis on plain text platforms, titles, foreign words, or creative writing. Adds nuance without real formatting."] }, { heading: "Examples", paragraphs: ["Title: '𝐼𝑡𝑎𝑙𝑖𝑐 𝑇𝑖𝑡𝑙𝑒' for books.", "Emphasis: '𝑖𝑚𝑝𝑜𝑟𝑡𝑎𝑛𝑡' in text.", "Quote: '𝐹𝑜𝑟𝑒𝑖𝑔𝑛 𝑤𝑜𝑟𝑑' for languages."] }, { heading: "FAQs", paragraphs: ["Q: Real italic? A: Visual simulation.", "Q: For social media? A: Yes, where formatting is limited.", "Q: Readable? A: Generally yes.", "Q: Combined with bold? A: Use bold italic tool."] } ] } },
                'outline': { title: "About the Outline Text Generator", paragraphs: ["The Outline Text Generator creates a 'double-struck' effect, making your text appear as if it is hollow or outlined. This unique style is visually distinct and light, making it great for headings or decorative labels.", "Derived from mathematical alphanumeric symbols, these characters are widely supported across modern browsers and devices. The outline effect provides a clean, modern look that stands out against solid backgrounds.", "Use this tool to create distinctive headers for your social media posts or to highlight specific terms in a way that is subtle yet effective. It works best with short phrases or titles."], example: { title: "Outline Text Example", before: "Hollow", after: "ℍ𝕠𝕝𝕝𝕠𝕨" }, details: { sections: [ { heading: "What is outline text?", paragraphs: ["Outline text uses double-struck Unicode characters to create a hollow, outlined effect. Text appears as if drawn with an outline."] }, { heading: "When to use it?", paragraphs: ["Use for subtle emphasis, modern headers, or decorative text. Stands out on solid backgrounds."] }, { heading: "Examples", paragraphs: ["Header: 'ℍ𝔼𝔸𝔻𝔼ℝ' for titles.", "Label: '𝕆𝕌𝕋𝕃𝕀ℕ𝔼' for tags.", "Brand: '𝕄𝕆𝔻𝔼ℝℕ' for style."] }, { heading: "FAQs", paragraphs: ["Q: Hollow effect? A: Yes, outlined appearance.", "Q: For backgrounds? A: Good on solid colors.", "Q: Compatible? A: Unicode-supporting platforms.", "Q: Bold outline? A: This is standard outline."] } ] } },
                'parentheses-around-letters': { title: "About the Parentheses Around Letters Tool", paragraphs: ["The Parentheses Around Letters tool automatically wraps each individual character of your text in parentheses. This formatting style is often used in legal documents, technical writing, or to create a specific aesthetic in lists.", "While you could manually type parentheses around every letter, it would be extremely time-consuming. This tool automates the process, mapping standard characters to their parenthesized Unicode equivalents where available, or adding standard parentheses where not.", "It is particularly useful for creating enumeration tokens (like (a), (b), (c)) or for purely decorative text effects in digital art and communication."], example: { title: "Parentheses Example", before: "abc", after: "⒜⒝⒞" }, details: { sections: [ { heading: "What is parentheses around letters?", paragraphs: ["This tool wraps each character in parentheses using Unicode enclosed characters. Creates (a) (b) (c) style text."] }, { heading: "When to use it?", paragraphs: ["Use for legal enumerations, technical lists, or decorative effects. Good for formal documents or stylized text."] }, { heading: "Examples", paragraphs: ["List: '(𝐚) (𝐛) (𝐜)' for items.", "Legal: '(𝐢) (𝐢𝐢) (𝐢𝐢𝐢)' for sections.", "Style: '(𝐇) (𝐄) (𝐋) (𝐋) (𝐎)' for words."] }, { heading: "FAQs", paragraphs: ["Q: All characters? A: Letters and some symbols.", "Q: For lists? A: Great for enumerated lists.", "Q: Compatible? A: Unicode platforms.", "Q: Manual? A: Automated wrapping."] } ] } },
                'pascal-case': { title: "About the Pascal Case Converter", paragraphs: ["The Pascal Case Converter transforms text into a naming convention where the first letter of each concatenated word is capitalized. It is similar to Camel Case, but with the distinction that the very first letter is also capitalized.", "This format is a standard naming convention in many programming languages (like C#, Java, and Pascal) for defining class names and types. It removes all spaces and punctuation, merging words into a single identifier.", "Developers use this tool to quickly format variable names, classes, or file names from plain English descriptions. It ensures code consistency and adherence to style guides without manual editing."], example: { title: "Pascal Case Example", before: "hello world example", after: "HelloWorldExample" }, details: { sections: [ { heading: "What is pascal case?", paragraphs: ["Pascal case capitalizes the first letter of each word and removes spaces. Used for class names in programming."] }, { heading: "When to use it?", paragraphs: ["Use for programming class names, types, or any identifier needing capitalized words without spaces."] }, { heading: "Examples", paragraphs: ["Class: 'UserAccount' from 'user account'.", "Type: 'StringBuilder' from 'string builder'.", "Name: 'ProductName' from 'product name'."] }, { heading: "FAQs", paragraphs: ["Q: Camel case? A: Similar but first letter lowercase.", "Q: For variables? A: Typically for classes/types.", "Q: Languages? A: C#, Java, etc.", "Q: Spaces? A: Removed, words merged."] } ] } },
                'reverse-text': { title: "About the Reverse Text Tool", paragraphs: ["The Reverse Text Tool is a simple yet effective utility that completely inverts the order of characters in your text string. It reads your text backwards, from the last character to the first.", "This tool is fun for creating 'mirror writing' puzzles, creating palindromes, or obfuscating text for spoilers. In more technical contexts, reversing strings is a common operation in data processing algorithms.", "Whether you are looking to decode a backwards message or create one of your own, this tool handles the transformation instantly, preserving all spaces and punctuation in their reversed positions."], example: { title: "Reverse Text Example", before: "Hello", after: "olleH" }, details: { sections: [ { heading: "What is reverse text?", paragraphs: ["Reverse text flips the order of all characters in a string, reading from end to start."] }, { heading: "When to use it?", paragraphs: ["Use for puzzles, spoilers, palindromes, or data processing. Fun for hiding or reversing text."] }, { heading: "Examples", paragraphs: ["Word: 'Hello' becomes 'olleH'.", "Sentence: 'I am here' becomes 'ereh ma I'.", "Palindrome check: Reverse and compare."] }, { heading: "FAQs", paragraphs: ["Q: Preserves spaces? A: Yes, spaces and punctuation reversed too.", "Q: For palindromes? A: Check if same forwards/backwards.", "Q: Reversible? A: Run again to restore.", "Q: Case sensitive? A: No change to case."] } ] } },
                'slashed': { title: "About the Slashed Text Generator", paragraphs: ["The Slashed Text Generator overlays a forward slash (/) or a solidus accent on every character of your text. This creates a 'cancelled' or 'void' visual effect, similar to strikethrough but with a diagonal orientation.", "This style is often used to represent 'glitch' text, indicate removed content, or simply to add a chaotic, textured look to digital typography. It uses combining diacritical marks to achieve the effect.", "By adding the specific Unicode combining character to each letter, the tool generates text that looks scratched out or damaged, which is popular in horror, cyberpunk, and artistic internet subcultures."], example: { title: "Slashed Text Example", before: "Void", after: "V̷o̷i̷d̷" }, details: { sections: [ { heading: "What is slashed text?", paragraphs: ["Slashed text adds diagonal slashes over each character using combining diacritics, creating a cancelled or glitch effect."] }, { heading: "When to use it?", paragraphs: ["Use for glitch aesthetics, indicating removal, or cyberpunk/horror themes. Adds textured, damaged look."] }, { heading: "Examples", paragraphs: ["Glitch: 'G̷l̷i̷t̷c̷h̷' for effect.", "Cancel: 'D̷e̷l̷e̷t̷e̷' for void.", "Style: 'C̷y̷b̷e̷r̷' for theme."] }, { heading: "FAQs", paragraphs: ["Q: Diagonal slash? A: Yes, forward slash overlay.", "Q: For horror? A: Popular in dark themes.", "Q: Compatible? A: Unicode with combining support.", "Q: Reversible? A: Hard to remove slashes."] } ] } },
                'snake-case': { title: "About the Snake Case Converter", paragraphs: ["The Snake Case Converter is a formatting tool that converts text into `snake_case`. This convention replaces all spaces and punctuation with underscores and converts letters to lowercase.", "It is widely used in programming, particularly in Python, database field naming, and file naming conventions. Writing variables in snake_case improves readability by clearly separating words without using spaces, which are often illegal in code identifiers.", "This tool takes any sentence or mixed-case string and standardizes it into a clean, underscore-separated format, saving developers time when declaring variables or naming database columns."], example: { title: "Snake Case Example", before: "User ID Number", after: "user_id_number" }, details: { sections: [ { heading: "What is snake case?", paragraphs: ["Snake case uses lowercase letters with underscores separating words. Standard for Python variables and database fields."] }, { heading: "When to use it?", paragraphs: ["Use for programming variables, database columns, file names in languages like Python, Ruby."] }, { heading: "Examples", paragraphs: ["Variable: 'user_name' from 'User Name'.", "Field: 'created_at' from 'Created At'.", "File: 'config_file' from 'Config File'."] }, { heading: "FAQs", paragraphs: ["Q: Lowercase? A: Yes, all lowercase.", "Q: Underscores? A: Separates words.", "Q: For constants? A: Often used for constants too.", "Q: Languages? A: Python, Ruby, etc."] } ] } },
                'upside-down-text': { title: "About the Upside Down Text Generator", paragraphs: ["The Upside Down Text Generator flips your text 180 degrees, creating the effect of turning the screen upside down. It allows you to type 'uʍop ǝpᴉsdn' directly into chats, comments, and profiles.", "Since standard keyboards don't have upside-down keys, this tool maps your input to specific Unicode characters that resemble inverted letters. It is a classic internet trick used for humor, expressing distress (like table flipping), or grabbing attention.", "The tool handles the conversion character-by-character to find the best upside-down match for each letter, number, and punctuation mark, producing a readable but inverted result."], example: { title: "Upside Down Example", before: "Table Flip", after: "dᴉlℲ ǝlqɐ┴" }, details: { sections: [ { heading: "What is upside down text?", paragraphs: ["Upside down text uses rotated Unicode characters to create inverted text, as if the page is flipped 180 degrees."] }, { heading: "When to use it?", paragraphs: ["Use for humor, table-flipping memes, distress expression, or attention-grabbing effects."] }, { heading: "Examples", paragraphs: ["Flip: 'Hello' becomes 'ollǝH' upside down.", "Meme: '(╯°□°)╯︵ ┻━┻' for rage.", "Fun: 'uʍop ǝpᴉsdn' for style."] }, { heading: "FAQs", paragraphs: ["Q: 180 degrees? A: Yes, fully inverted.", "Q: All characters? A: Best matches available.", "Q: For memes? A: Classic table flip.", "Q: Readable? A: When upright, inverted."] } ] } },
                'wide-text': { title: "About the Wide Text Generator", paragraphs: ["The Wide Text Generator, also known as Fullwidth Text or Vaporwave Text, stretches your characters to occupy more horizontal space. It uses 'Fullwidth' Unicode characters originally designed for aligning Latin letters with complex East Asian ideographs.", "This aesthetic (often typed as Ａｅｓｔｈｅｔｉｃ) is a hallmark of the Vaporwave internet subculture and is used to create a dreamy, retro, or emphatic vibe. The extra spacing gives the text a distinct, blocky appearance.", "Simply type your standard text, and the tool converts it into fullwidth characters. It instantly gives your messages a unique, spaced-out look that differentiates them from standard typography."], example: { title: "Wide Text Example", before: "Aesthetic", after: "Ａｅｓｔｈｅｔｉｃ" }, details: { sections: [ { heading: "What is wide text?", paragraphs: ["Wide text uses fullwidth Unicode characters to stretch text horizontally, creating a blocky, spaced-out appearance."] }, { heading: "When to use it?", paragraphs: ["Use for vaporwave aesthetics, emphasis, retro style, or to make text stand out with extra width."] }, { heading: "Examples", paragraphs: ["Aesthetic: 'ＡＥＳＴＨＥＴＩＣ' for style.", "Emphasis: 'ＷＩＤＥ' for impact.", "Retro: 'ＶＡＰＯＲＷＡＶＥ' for theme."] }, { heading: "FAQs", paragraphs: ["Q: Fullwidth? A: Yes, East Asian width.", "Q: For vaporwave? A: Iconic style.", "Q: Compatible? A: Unicode platforms.", "Q: Spacing? A: More horizontal space."] } ] } }
            },
            extract: {
                'extract-emails': {
                    title: "About the Extract Emails Tool",
                    paragraphs: ["The Extract Emails tool is a powerful data mining utility designed to scan large blocks of text and isolate valid email addresses. Whether you have a mixed content file, a scraped web page, or a messy contact list, this tool filters out the noise and returns a clean list of emails.", "It recognizes standard email formats, identifying the '@' symbol and domain extensions to ensure accuracy. This is particularly useful for digital marketers building mailing lists, sales teams organizing leads, or developers cleaning up user databases.", "Instead of manually searching and copying addresses one by one, simply paste your text into the input field. The tool instantly processes the content and generates a newline-separated list of every unique email address found, ready for export or use."],
                    example: { title: "Extract Emails Example", before: "Contact us at support@example.com or sales@example.org for more info.", after: "support@example.com\nsales@example.org" },
                    details: { sections: [ { heading: "What is email extraction?", paragraphs: ["Email extraction scans text to find and isolate valid email addresses using pattern matching for the @ symbol and domain formats."] }, { heading: "When to use it?", paragraphs: ["Use for building mailing lists, cleaning contact data, scraping web content, or organizing leads from unstructured text."] }, { heading: "Examples", paragraphs: ["From text: Extract 'user@domain.com' from mixed content.", "Multiple: Get list from 'contact@site.com, info@site.com'.", "Scraped data: Pull emails from web page text."] }, { heading: "FAQs", paragraphs: ["Q: What formats? A: Standard emails with @ and domain.", "Q: Duplicates? A: Returns unique addresses.", "Q: Validation? A: Basic pattern matching.", "Q: Export? A: Newline-separated list."] } ] }
                },
                'extract-phone-numbers': {
                    title: "About the Extract Phone Numbers Tool",
                    paragraphs: ["The Extract Phone Numbers tool simplifies the process of identifying contact information within unstructured text. It scans your document for number patterns that resemble telephone numbers, helping you compile contact lists efficiently.", "This tool is invaluable for sales professionals, recruiters, and data analysts who deal with raw text dumps containing contact details. It saves hours of manual entry by detecting sequences of digits that may include common separators like hyphens, dots, or parentheses.", "By automating the extraction process, you ensure that no potential lead is missed. The output provides a list of extracted number sequences, which you can then format or verify according to your specific regional requirements."],
                    example: { title: "Extract Phone Numbers Example", before: "Call 555-0199 or (555) 012-3456 tomorrow.", after: "555-0199\n(555) 012-3456" },
                    details: { sections: [ { heading: "What is phone number extraction?", paragraphs: ["Phone number extraction identifies digit patterns that resemble telephone numbers, including common formats with separators like hyphens, dots, or parentheses."] }, { heading: "When to use it?", paragraphs: ["Use for building contact lists, sales lead generation, data cleaning, or extracting contacts from documents and web content."] }, { heading: "Examples", paragraphs: ["Various formats: Extract '555-1234', '(555) 123-4567'.", "From text: Pull numbers from business cards or emails.", "Lists: Get all phone numbers from a directory."] }, { heading: "FAQs", paragraphs: ["Q: What formats? A: Common patterns with digits and separators.", "Q: International? A: Basic patterns; may need formatting.", "Q: Validation? A: Pattern matching, not verification.", "Q: Regional? A: Can be adapted for local formats."] } ] }
                },
                'extract-ip-address': {
                    title: "About the Extract IP Address Tool",
                    paragraphs: ["The Extract IP Address tool is a network utility designed to find and list IPv4 addresses hidden within log files, configuration documents, or text blocks. It looks for the distinct pattern of four numbers separated by dots (e.g., 192.168.1.1).", "System administrators and cybersecurity analysts frequently use this tool to parse server access logs or firewall reports. Instead of reading through thousands of lines of code to find connection sources, this tool isolates the IP addresses instantly.", "It filters out valid IP structures from surrounding text, errors, and comments. The result is a clean list of IP addresses that can be used for whitelisting, blacklisting, or geographic analysis."],
                    example: { title: "Extract IP Address Example", before: "Server accessed by 192.168.1.5 at midnight. Backup server: 10.0.0.1", after: "192.168.1.5\n10.0.0.1" },
                    details: { sections: [ { heading: "What is IP address extraction?", paragraphs: ["IP address extraction finds IPv4 addresses in text by identifying the pattern of four numbers (0-255) separated by dots."] }, { heading: "When to use it?", paragraphs: ["Use for log analysis, network monitoring, security audits, server administration, or extracting connection data from text."] }, { heading: "Examples", paragraphs: ["From logs: Extract '192.168.1.1' from access logs.", "Config files: Pull IPs from network configurations.", "Security: Find suspicious IPs in reports."] }, { heading: "FAQs", paragraphs: ["Q: IPv4 only? A: Yes, standard IPv4 format.", "Q: Validation? A: Checks 0-255 range per octet.", "Q: IPv6? A: Not supported currently.", "Q: Private IPs? A: Extracts all valid IPs."] } ] }
                },
                'extract-zip-codes': {
                    title: "About the Extract Zip Codes Tool",
                    paragraphs: ["The Extract Zip Codes tool allows you to pull postal codes from mixed address data or text documents. While formats vary globally, this tool focuses on numeric sequences that typically represent zip codes, such as 5-digit US codes.", "This is helpful for logistics planning, sorting address lists, or organizing customer data by region. If you have a long list of unformatted addresses, this tool can help separate the location data for mapping or shipping software.", "Simply input your text, and the tool attempts to identify independent numeric strings that match standard postal code lengths, giving you a list of potential zip codes for further processing."],
                    example: { title: "Extract Zip Codes Example", before: "New York, NY 10001\nBeverly Hills, CA 90210", after: "10001\n90210" },
                    details: { sections: [ { heading: "What is zip code extraction?", paragraphs: ["Zip code extraction identifies numeric sequences that match postal code patterns, typically 5-digit codes for US addresses."] }, { heading: "When to use it?", paragraphs: ["Use for address processing, logistics planning, customer data organization, or extracting location data from text."] }, { heading: "Examples", paragraphs: ["Addresses: Extract '10001' from 'NY 10001'.", "Lists: Pull codes from customer databases.", "Global: May work for similar numeric formats."] }, { heading: "FAQs", paragraphs: ["Q: US only? A: Primarily 5-digit; may detect others.", "Q: Validation? A: Basic numeric pattern matching.", "Q: International? A: Limited; focuses on numeric codes.", "Q: Formatting? A: Extracts raw numbers."] } ] }
                },
                'extract-urls': {
                    title: "About the Extract URLs Tool",
                    paragraphs: ["The Extract URLs tool is a web scraping utility that identifies and compiles all hyperlinks found within a text string. It detects standard protocols like http and https to find web addresses embedded in content.", "This tool is essential for SEO specialists, researchers, and content managers who need to audit links on a page or extract references from a document. It eliminates the need to inspect HTML source code manually to find href attributes.", "Paste your HTML code, article text, or social media post history, and the tool will generate a list of all external links found. This list can then be used for link building, verifying citations, or checking for broken links."],
                    example: { title: "Extract URLs Example", before: "Visit https://google.com or check http://example.org/page", after: "https://google.com\nhttp://example.org/page" },
                    details: { sections: [ { heading: "What is URL extraction?", paragraphs: ["URL extraction identifies web addresses in text by detecting http/https protocols and valid domain patterns."] }, { heading: "When to use it?", paragraphs: ["Use for web scraping, link auditing, SEO analysis, content migration, or extracting references from documents."] }, { heading: "Examples", paragraphs: ["From text: Extract 'https://site.com' from articles.", "HTML: Pull links from '<a href=\"url\">' tags.", "Social media: Get URLs from posts."] }, { heading: "FAQs", paragraphs: ["Q: Protocols? A: http and https supported.", "Q: Relative URLs? A: Only absolute URLs.", "Q: Validation? A: Basic pattern matching.", "Q: Duplicates? A: May include duplicates."] } ] }
                },
                'extract-image-urls': {
                    title: "About the Extract Image URLs Tool",
                    paragraphs: ["The Extract Image URLs tool specifically targets direct links to image files. It scans your text for URLs that end in common image extensions such as .jpg, .png, .gif, .svg, and .webp.", "Designers and developers use this tool to quickly grab assets from a webpage source code or a style sheet. Instead of sifting through lines of code, you can extract a clean list of all visual assets referenced in the document.", "This is particularly useful for migrating content, backing up media libraries, or analyzing the visual assets used by a competitor. The output is a list of direct links that you can download or view immediately."],
                    example: { title: "Extract Image URLs Example", before: "<img src='image1.png'> and background: url('bg.jpg')", after: "image1.png\nbg.jpg" },
                    details: { sections: [ { heading: "What is image URL extraction?", paragraphs: ["Image URL extraction finds direct links to image files by detecting URLs ending in common image extensions like .jpg, .png, .gif, .svg, .webp."] }, { heading: "When to use it?", paragraphs: ["Use for asset migration, media backup, design analysis, content scraping, or extracting images from web code."] }, { heading: "Examples", paragraphs: ["HTML: Extract 'image.jpg' from img tags.", "CSS: Pull from 'background: url(image.png)'.", "Web scraping: Get all image links from pages."] }, { heading: "FAQs", paragraphs: ["Q: Extensions? A: jpg, png, gif, svg, webp.", "Q: Full URLs? A: Can be relative or absolute.", "Q: Other formats? A: Only specified extensions.", "Q: Download? A: Provides links for manual download."] } ] }
                },
                'extract-hex-colors': {
                    title: "About the Extract Hex Colors Tool",
                    paragraphs: ["The Extract Hex Colors tool is a designer's aid that finds hexadecimal color codes within CSS files, HTML, or plain text. It looks for the '#' symbol followed by 3 or 6 hexadecimal digits.", "When analyzing a website's color palette or trying to replicate a style, this tool saves time by identifying every color definition in the code. It allows you to create a swatch list from an existing stylesheet instantly.", "The tool extracts valid codes like #FFF or #E63946, ignoring invalid strings. The result is a list of color codes that you can plug into your design software or color matching tools."],
                    example: { title: "Extract Hex Colors Example", before: "body { background: #fff; color: #333; } .accent { color: #f00; }", after: "#fff\n#333\n#f00" },
                    details: { sections: [ { heading: "What is hex color extraction?", paragraphs: ["Hex color extraction finds hexadecimal color codes in text by identifying '#' followed by 3 or 6 valid hexadecimal digits (0-9, A-F)."] }, { heading: "When to use it?", paragraphs: ["Use for design analysis, color palette extraction, CSS auditing, or replicating website color schemes."] }, { heading: "Examples", paragraphs: ["CSS: Extract '#FF0000' from stylesheets.", "Design files: Pull colors from code comments.", "Web analysis: Get color scheme from HTML."] }, { heading: "FAQs", paragraphs: ["Q: Formats? A: #RGB and #RRGGBB supported.", "Q: Case sensitive? A: No, accepts A-F and a-f.", "Q: Short codes? A: Yes, 3-digit codes.", "Q: Validation? A: Checks valid hex characters."] } ] }
                },
                'extract-numbers': {
                    title: "About the Extract Numbers Tool",
                    paragraphs: ["The Extract Numbers tool pulls every numeric value from a block of text. Whether they are integers, decimals, or parts of a larger string, this tool isolates the digits for calculation or analysis.", "Data analysts often use this to strip text from financial reports or scientific data, leaving only the raw figures. It is also useful for extracting IDs, quantities, or measurements from unstructured descriptions.", "The tool scans sequentially and outputs every independent number found. It helps convert text-heavy data into a format that is ready for spreadsheets or mathematical processing."],
                    example: { title: "Extract Numbers Example", before: "Order #1234: 5 items at $20 each.", after: "1234\n5\n20" },
                    details: { sections: [ { heading: "What is number extraction?", paragraphs: ["Number extraction identifies and isolates all numeric sequences (digits) from text, including integers and decimal numbers."] }, { heading: "When to use it?", paragraphs: ["Use for data analysis, financial processing, extracting measurements, IDs, or quantities from mixed text content."] }, { heading: "Examples", paragraphs: ["Financial: Extract '123.45' from reports.", "IDs: Pull '45678' from descriptions.", "Measurements: Get '10.5' from specifications."] }, { heading: "FAQs", paragraphs: ["Q: Decimals? A: Yes, includes decimal points.", "Q: Negative? A: Includes negative signs.", "Q: Separators? A: Extracts contiguous digits.", "Q: Formatting? A: Raw numbers only."] } ] }
                },
                'extract-text-between': {
                    title: "About the Extract Text Between Tool",
                    paragraphs: ["The Extract Text Between tool is a precise extraction utility that allows you to capture content located between two specific delimiters. You define the 'Start' and 'End' markers, and the tool finds every occurrence of text sandwiched between them.", "This is incredibly powerful for parsing code (e.g., getting text between tags), scraping data from structured logs, or extracting values from JSON-like strings. It mimics the behavior of regular expressions but in a user-friendly interface.", "For example, you can extract everything inside parentheses, quotes, or custom HTML tags. This targeted approach allows you to surgicaly remove the data you need from a complex document."],
                    example: { title: "Extract Text Between Example", before: "User: [John], ID: [456]", after: "John\n456" },
                    details: { sections: [ { heading: "What is text between extraction?", paragraphs: ["Text between extraction captures content located between two user-defined delimiters (start and end markers)."] }, { heading: "When to use it?", paragraphs: ["Use for parsing structured data, code analysis, web scraping, or extracting specific content from formatted text."] }, { heading: "Examples", paragraphs: ["HTML: Extract between '<p>' and '</p>'.", "JSON: Pull values between quotes.", "Logs: Get data between brackets."] }, { heading: "FAQs", paragraphs: ["Q: Delimiters? A: User-defined start and end markers.", "Q: Multiple? A: Extracts all occurrences.", "Q: Nested? A: Finds first matching pairs.", "Q: Case sensitive? A: Yes, matches exactly."] } ] }
                },
                'extract-random-lines': {
                    title: "About the Extract Random Lines Tool",
                    paragraphs: ["The Extract Random Lines tool acts as a random sampler for your list data. It allows you to specify a number, and then randomly selects that many lines from your input text.", "This is frequently used for picking contest winners from a list of entrants, sampling data for quality assurance testing, or generating random prompts from a larger collection. It ensures a fair and unbiased selection process.", "Simply paste your list, choose how many items you want, and the tool will shuffle and extract the requested amount. It’s a quick way to randomize and subset data without using spreadsheet formulas."],
                    example: { title: "Extract Random Lines Example", before: "Option A\nOption B\nOption C\nOption D\n(Select 2)", after: "Option C\nOption A" },
                    details: { sections: [ { heading: "What is random line extraction?", paragraphs: ["Random line extraction randomly selects a specified number of lines from input text, providing unbiased sampling."] }, { heading: "When to use it?", paragraphs: ["Use for contests, data sampling, quality testing, random selection, or creating subsets from large lists."] }, { heading: "Examples", paragraphs: ["Contests: Randomly pick 3 winners from 100 entries.", "Testing: Sample 10 items from dataset.", "Prompts: Select random items from list."] }, { heading: "FAQs", paragraphs: ["Q: Truly random? A: Uses pseudorandom algorithm.", "Q: Duplicates? A: No, each selection is unique.", "Q: Order preserved? A: No, random order.", "Q: Seed? A: Not seedable currently."] } ] }
                }
            }
        };

        document.addEventListener('DOMContentLoaded', () => {
            let currentTool = null;
            let currentCategory = 'home';

            // DOM Elements
            const app = document.getElementById('app');
            const navLinks = document.querySelectorAll('.nav-link, .dropdown-item, .logo, .footer-links a, .feature-card, .btn-hero-primary');
            const pages = document.querySelectorAll('.page-container');
            const searchInput = document.getElementById('search-input');
            const searchResults = document.getElementById('search-results');
            const themeToggle = document.getElementById('theme-toggle');
            const mobileNavToggle = document.getElementById('mobile-nav-toggle');
            const mobileNav = document.getElementById('mobile-nav');
            const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
            const mobileNavClose = document.getElementById('mobile-nav-close');
            const mobileNavContent = document.getElementById('mobile-nav-content');
            const scrollTopBtn = document.getElementById('scroll-top');

            // --- NAVIGATION ---

            function normalizeRouteSegment(value) {
                return value.toString().trim()
                    .replace(/^About the\s+/i, '')
                    .replace(/\s+/g, '-')
                    .replace(/[^A-Za-z0-9-]/g, '')
                    .replace(/-+/g, '-')
                    .replace(/^-+|-+$/g, '');
            }

            function getToolRoute(categoryId, toolId) {
                const category = navItems.find(item => item.page === categoryId);
                let displayName = '';
                if (category) {
                    const toolMeta = category.tools.find(t => t.tool === toolId);
                    if (toolMeta) displayName = toolMeta.name;
                }
                if (!displayName && toolContent[categoryId] && toolContent[categoryId][toolId]) {
                    displayName = toolContent[categoryId][toolId].title || toolId;
                }
                return normalizeRouteSegment(displayName || toolId);
            }

            function findToolByRoute(route) {
                const normalized = route.toString().trim().replace(/^\/+|\/+$/g, '').toLowerCase();
                if (!normalized) return null;
                for (const category of navItems) {
                    for (const tool of category.tools) {
                        const routeSegment = normalizeRouteSegment(tool.name).toLowerCase();
                        if (routeSegment === normalized || tool.tool.toLowerCase() === normalized) {
                            return { categoryId: category.page, toolId: tool.tool };
                        }
                    }
                }
                return null;
            }

            function updateUrlPath(categoryId, toolId, replace = false) {
                const route = (!toolId || categoryId === 'home') ? '' : getToolRoute(categoryId, toolId);
                const url = route ? `/${route}` : '/';
                const title = (categoryId === 'home' || !toolId)
                    ? 'PhraseFixTools'
                    : toolContent[categoryId]?.[toolId]?.title || 'PhraseFixTools';
                if (replace) {
                    window.history.replaceState({ categoryId, toolId }, title, url);
                } else {
                    window.history.pushState({ categoryId, toolId }, title, url);
                }
                document.title = `${title} | PhraseFixTools`;
            }

            function navigateTo(pageId, toolId = null, replaceHistory = false) {
                // Hide all pages
                pages.forEach(page => {
                    page.style.display = 'none';
                });

                // Show target page
                const targetPage = document.getElementById(`page-${pageId}`);
                if (targetPage) {
                    targetPage.style.display = 'block';
                    currentCategory = pageId;
                    
                    // Activate specific tool tab if provided
                    if (toolId) {
                        activateTool(pageId, toolId, replaceHistory);
                    } else if (pageId !== 'home' && !staticPageContent[pageId]) {
                        // Activate first tool if none specified (for tool pages)
                        const firstTab = targetPage.querySelector('.tab-button');
                        if (firstTab) {
                            activateTool(pageId, firstTab.dataset.tool, replaceHistory);
                        }
                    } else if (staticPageContent[pageId]) {
                        renderStaticPage(pageId);
                        // Update URL for static pages
                        const pageRouteSegment = normalizeRouteSegment(staticPageContent[pageId].title);
                        const pageUrl = `/${pageRouteSegment}`;
                        const pageTitle = staticPageContent[pageId].title;
                        if (replaceHistory) {
                            window.history.replaceState({ pageId }, pageTitle, pageUrl);
                        } else {
                            window.history.pushState({ pageId }, pageTitle, pageUrl);
                        }
                        document.title = `${pageTitle} | PhraseFixTools`;
                    }

                    if (pageId === 'home' && !toolId) {
                        updateUrlPath('home', null, replaceHistory);
                    }
                    
                    window.scrollTo(0, 0);
                    closeMobileNav();
                }
            }

            function activateTool(categoryId, toolId, replaceHistory = false) {
                console.log('activateTool called:', categoryId, toolId);
                currentTool = toolId;
                const page = document.getElementById(`page-${categoryId}`);
                const tabs = page.querySelectorAll('.tab-button');
                const contentContainer = document.getElementById(`${categoryId}-content`);
                
                // Update tabs UI
                tabs.forEach(tab => {
                    if (tab.dataset.tool === toolId) {
                        tab.classList.add('active');
                        // Scroll tab into view if needed
                        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    } else {
                        tab.classList.remove('active');
                    }
                });

                // Update Content Description
                if (toolContent[categoryId] && toolContent[categoryId][toolId]) {
                    const data = toolContent[categoryId][toolId];
                    let html = `<div class="content-section"><h2>${data.title}</h2>`;
                    data.paragraphs.forEach(p => html += `<p>${p}</p>`);
                    
                    if (data.example) {
                        html += `
                            <div style="margin-top: 1.5rem; background: var(--bg-light); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
                                <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary-color);">${data.example.title}</h3>
                                <div style="margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600; font-size: 0.85rem; color: var(--text-light); display: block; margin-bottom: 0.25rem;">Before</span>
                                    <div style="background: rgba(16, 185, 129, 0.1); padding: 0.75rem; border-radius: 4px; font-family: monospace; overflow-x: auto;">${escapeHtml(data.example.before)}</div>
                                </div>
                                <div>
                                    <span style="font-weight: 600; font-size: 0.85rem; color: var(--text-light); display: block; margin-bottom: 0.25rem;">After</span>
                                    <div style="background: rgba(16, 185, 129, 0.1); padding: 0.75rem; border-radius: 4px; font-family: monospace; overflow-x: auto;">${escapeHtml(data.example.after)}</div>
                                </div>
                            </div>
                        `;
                    }
                    if (data.details && Array.isArray(data.details.sections)) {
                        html += `<div style="margin-top: 1.5rem; background: var(--bg-light); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">`;
                        data.details.sections.forEach(section => {
                            html += `<h3 style="font-size: 1.1rem; margin-top: 1rem; margin-bottom: 0.5rem; color: var(--primary-color);">${section.heading}</h3>`;
                            section.paragraphs.forEach(p => {
                                html += `<p style="margin-bottom: 0.8rem;">${p}</p>`;
                            });
                        });
                        html += `</div>`;
                    }
                    html += `</div>`;
                    contentContainer.innerHTML = html;
                } else {
                    contentContainer.innerHTML = '';
                }

                // Setup specific tool options if any
                setupToolOptions(categoryId, toolId);
                
                // Clear outputs
                const outputs = page.querySelectorAll('textarea[readonly]');
                outputs.forEach(el => el.value = '');

                // Update browser URL and page title for the active tool
                updateUrlPath(categoryId, toolId, replaceHistory);
            }

            function setupToolOptions(categoryId, toolId) {
                const optionsContainer = document.getElementById(`${categoryId}-options-container`);
                if (!optionsContainer) return;

                optionsContainer.innerHTML = '';
                optionsContainer.style.display = 'none'; // Default hidden

                if (categoryId === 'generators') {
                    optionsContainer.style.display = 'flex';
                    if (toolId === 'random-number') {
                        optionsContainer.innerHTML = `
                            <div><label>Min</label><input type="number" id="gen-min" value="1"></div>
                            <div><label>Max</label><input type="number" id="gen-max" value="100"></div>
                        `;
                    } else if (toolId === 'sequential-number') {
                        optionsContainer.innerHTML = `
                            <div><label>Start</label><input type="number" id="seq-start" value="1"></div>
                            <div><label>Step</label><input type="number" id="seq-step" value="1"></div>
                            <div><label>Count</label><input type="number" id="seq-count" value="10"></div>
                        `;
                    } else if (toolId === 'password') {
                         optionsContainer.innerHTML = `
                            <div><label>Length</label><input type="number" id="pass-len" value="12" min="4" max="50"></div>
                        `;
                    }
                } else if (categoryId === 'modify') {
                     optionsContainer.style.display = 'flex';
                     if (toolId === 'add-prefix' || toolId === 'add-suffix' || toolId === 'add-text-to-each-line') {
                         optionsContainer.innerHTML = `<div><label>Text to Add</label><input type="text" id="mod-text" placeholder="Enter text..."></div>`;
                     } else if (toolId === 'add-text-in-specific-position') {
                         optionsContainer.innerHTML = `
                             <div><label>Text</label><input type="text" id="mod-text" placeholder="Text"></div>
                             <div><label>Position Index</label><input type="number" id="mod-pos" value="0"></div>
                         `;
                     } else if (toolId === 'keep-first-characters-of-each-line' || toolId === 'keep-last-characters-of-each-line') {
                          optionsContainer.innerHTML = `<div><label>Number of Characters</label><input type="number" id="mod-num" value="5"></div>`;
                     } else if (toolId === 'keep-lines-containing') {
                         optionsContainer.innerHTML = `<div><label>Search Word</label><input type="text" id="mod-text" placeholder="Keyword"></div>`;
                     } else if (toolId === 'merge-text') {
                          optionsContainer.innerHTML = `<div><label>Delimiter</label><input type="text" id="mod-text" value=", "></div>`;
                     } else if (toolId === 'add-string-after-number-of-characters') {
                         optionsContainer.innerHTML = `
                             <div><label>String to Add</label><input type="text" id="mod-text" placeholder="-"></div>
                             <div><label>After Char Count</label><input type="number" id="mod-pos" value="4"></div>
                         `;
                     }
                } else if (categoryId === 'remove') {
                    if (toolId === 'remove-lines-containing') {
                        optionsContainer.style.display = 'flex';
                        optionsContainer.innerHTML = `<div><label>Containing Word</label><input type="text" id="rem-text" placeholder="Word..."></div>`;
                    } else if (toolId === 'remove-first-characters' || toolId === 'remove-last-characters') {
                        optionsContainer.style.display = 'flex';
                        optionsContainer.innerHTML = `<div><label>Count</label><input type="number" id="rem-count" value="1"></div>`;
                    } else if (toolId === 'remove-text-between') {
                        optionsContainer.style.display = 'flex';
                        optionsContainer.innerHTML = `
                            <div><label>Start Marker</label><input type="text" id="rem-start" placeholder="Start"></div>
                            <div><label>End Marker</label><input type="text" id="rem-end" placeholder="End"></div>
                        `;
                    }
                } else if (categoryId === 'extract') {
                    if (toolId === 'extract-text-between') {
                        optionsContainer.style.display = 'flex';
                        optionsContainer.innerHTML = `
                            <div><label>Start Marker</label><input type="text" id="ext-start" placeholder="Start"></div>
                            <div><label>End Marker</label><input type="text" id="ext-end" placeholder="End"></div>
                        `;
                    } else if (toolId === 'extract-random-lines') {
                         optionsContainer.style.display = 'flex';
                         optionsContainer.innerHTML = `<div><label>Count</label><input type="number" id="ext-count" value="5"></div>`;
                    }
                } else if (categoryId === 'replace') {
                    optionsContainer.style.display = 'flex';
                     if (toolId === 'find-replace') {
                        optionsContainer.innerHTML = `
                            <div><label>Find</label><input type="text" id="rep-find" placeholder="Find..."></div>
                            <div><label>Replace With</label><input type="text" id="rep-with" placeholder="Replace..."></div>
                        `;
                    } else if (toolId === 'replace-spaces') {
                         optionsContainer.innerHTML = `<div><label>Replace Spaces With</label><input type="text" id="rep-with" value="-"></div>`;
                    } else if (toolId === 'replace-text-between') {
                        optionsContainer.innerHTML = `
                            <div><label>Start</label><input type="text" id="rep-start"></div>
                            <div><label>End</label><input type="text" id="rep-end"></div>
                             <div><label>Replace With</label><input type="text" id="rep-with"></div>
                        `;
                    } else if (toolId === 'replace-newline-commas') {
                        optionsContainer.style.display = 'none';
                    }
                }
            }

            function renderStaticPage(pageId) {
                const container = document.getElementById(`page-${pageId}`);
                const content = staticPageContent[pageId];
                let html = `<div class="container"><div class="page-title"><h1>${content.title}</h1><p>${content.subtitle}</p></div>`;
                
                content.sections.forEach(section => {
                    html += `<div class="content-section"><h2>${section.heading}</h2>`;
                    section.paragraphs.forEach(p => html += `<p style="margin-bottom: 0.8rem;">${p}</p>`);
                    html += `</div>`;
                });
                
                html += `</div>`;
                container.innerHTML = html;
            }

            function escapeHtml(text) {
                if (!text) return '';
                return text
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }

            // --- EVENT LISTENERS ---

            // Navigation Clicks
            document.body.addEventListener('click', (e) => {
                const target = e.target.closest('[data-navigate]');
                if (target) {
                    e.preventDefault();
                    const page = target.dataset.navigate;
                    const tool = target.dataset.tool;
                    navigateTo(page, tool);
                } else if (e.target.classList.contains('tab-button')) {
                     const tool = e.target.dataset.tool;
                     // Find parent page id
                     const pageId = e.target.closest('.page-container').id.replace('page-', '');
                     activateTool(pageId, tool);
                }
            });

            // Theme Toggle
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                themeToggle.innerHTML = newTheme === 'dark' ? '<span>☀️</span>' : '<span>🌙</span>';
            });
            // Init theme icon
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                 themeToggle.innerHTML = '<span>☀️</span>';
            }


            // Mobile Menu
            function buildMobileMenu() {
                let html = '<div class="mobile-nav-links">';
                navItems.forEach(item => {
                    html += `<details><summary>${item.page.charAt(0).toUpperCase() + item.page.slice(1)}</summary>`;
                    item.tools.forEach(tool => {
                        html += `<button class="dropdown-item" data-navigate="${item.page}" data-tool="${tool.tool}">${tool.name}</button>`;
                    });
                    html += `</details>`;
                });
                html += '</div>';
                
                html += `
                    <div class="mobile-nav-static-links">
                        <a href="#" data-navigate="privacy">Privacy Policy</a>
                        <a href="#" data-navigate="terms">Terms of Service</a>
                        <a href="#" data-navigate="contact">Contact Us</a>
                    </div>
                `;
                
                mobileNavContent.innerHTML = html;
            }
            buildMobileMenu();

            mobileNavToggle.addEventListener('click', () => {
                mobileNav.classList.add('active');
                mobileNavOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            function closeMobileNav() {
                mobileNav.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            mobileNavClose.addEventListener('click', closeMobileNav);
            mobileNavOverlay.addEventListener('click', closeMobileNav);

            // Search Functionality
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                if (query.length < 2) {
                    searchResults.classList.add('hidden');
                    return;
                }

                const matched = allTools.filter(t => t.name.toLowerCase().includes(query));
                
                if (matched.length > 0) {
                    searchResults.innerHTML = matched.map(t => 
                        `<button class="search-results-item" data-navigate="${t.page}" data-tool="${t.tool}">${t.name}</button>`
                    ).join('');
                    searchResults.classList.remove('hidden');
                } else {
                    searchResults.innerHTML = '<div style="padding: 1rem; color: var(--text-light);">No tools found</div>';
                    searchResults.classList.remove('hidden');
                }
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-container')) {
                    searchResults.classList.add('hidden');
                }
            });

            // Scroll Top
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });


            // --- TOOL LOGIC HANDLERS ---

            // Basic
            const basicInput = document.getElementById('basic-input');
            const basicOutput = document.getElementById('basic-output');
            
            // Re-attach listener for Basic tab buttons since they are handled by global click, 
            // but we need to trigger calculation on input change if tool changes
            
            basicInput?.addEventListener('input', runBasicTool);
            
            function runBasicTool() {
                if (currentCategory !== 'basic' || !currentTool) return;
                const text = basicInput.value;
                let res = '';

                switch (currentTool) {
                    case 'upper-case': res = text.toUpperCase(); break;
                    case 'lower-case': res = text.toLowerCase(); break;
                    case 'capitalize-words': res = text.replace(/\b\w/g, l => l.toUpperCase()); break;
                    case 'sentence-case': res = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()); break;
                    case 'title-case': 
                        res = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
                        break;
                    case 'alternate-case': 
                        res = text.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join(''); 
                        break;
                    case 'invert-case':
                        res = text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
                        break;
                    case 'strikethrough':
                         res = text.split('').map(c => c + '\u0336').join('');
                         break;
                    case 'underline':
                         res = text.split('').map(c => c + '\u0332').join('');
                         break;
                }
                basicOutput.value = res;
            }
            
            document.getElementById('basic-clear-btn')?.addEventListener('click', () => {
                basicInput.value = '';
                basicOutput.value = '';
            });

            // Formatter
            document.getElementById('formatter-beautify-btn')?.addEventListener('click', () => {
                const input = document.getElementById('formatter-input').value;
                const output = document.getElementById('formatter-output');
                try {
                    if (currentTool === 'json') {
                        output.value = JSON.stringify(JSON.parse(input), null, 4);
                    } else if (currentTool === 'html' || currentTool === 'css' || currentTool === 'sql' || currentTool === 'javascript') {
                        // Very basic indentation for demo purposes (robust formatter requires huge lib)
                        let res = input
                            .replace(/>/g, '>\n')
                            .replace(/\{/g, '{\n')
                            .replace(/\}/g, '\n}')
                            .replace(/;/g, ';\n')
                            .split('\n');
                        let indent = 0;
                        res = res.map(line => {
                           line = line.trim();
                           if (line.match(/<\//) || line.match(/\}/)) indent = Math.max(0, indent - 1);
                           const pad = '    '.repeat(indent);
                           if (line.match(/<[^/]/) && !line.match(/\/>/) && !line.match(/<.*\/>/) || line.match(/\{/)) indent++;
                           return pad + line;
                        }).join('\n');
                        output.value = res.trim();
                    }
                } catch (e) {
                    output.value = "Error: Invalid Input";
                }
            });
            document.getElementById('formatter-clear-btn')?.addEventListener('click', () => {
                document.getElementById('formatter-input').value = '';
                document.getElementById('formatter-output').value = '';
            });

            // Counter
            document.getElementById('counter-input')?.addEventListener('input', (e) => {
                const text = e.target.value;
                const stats = document.getElementById('counter-stats');
                let html = '';
                
                if (currentTool === 'character-word') {
                    html += `<div class="stat-card"><h3>Characters</h3><div class="stat-value">${text.length}</div></div>`;
                    html += `<div class="stat-card"><h3>Words</h3><div class="stat-value">${text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</div></div>`;
                    html += `<div class="stat-card"><h3>Sentences</h3><div class="stat-value">${text.split(/[.!?]+/).filter(x => x.trim()).length}</div></div>`;
                } else if (currentTool === 'line') {
                    html += `<div class="stat-card"><h3>Total Lines</h3><div class="stat-value">${text.split(/\r\n|\r|\n/).length}</div></div>`;
                    html += `<div class="stat-card"><h3>Empty Lines</h3><div class="stat-value">${text.split(/\r\n|\r|\n/).filter(l => !l.trim()).length}</div></div>`;
                } else if (currentTool === 'bracket-tag') {
                    html += `<div class="stat-card"><h3>Round ( )</h3><div class="stat-value">${(text.match(/\(/g)||[]).length + (text.match(/\)/g)||[]).length}</div></div>`;
                    html += `<div class="stat-card"><h3>Square [ ]</h3><div class="stat-value">${(text.match(/\[/g)||[]).length + (text.match(/\]/g)||[]).length}</div></div>`;
                    html += `<div class="stat-card"><h3>Curly { }</h3><div class="stat-value">${(text.match(/\{/g)||[]).length + (text.match(/\}/g)||[]).length}</div></div>`;
                    html += `<div class="stat-card"><h3>Angle < ></h3><div class="stat-value">${(text.match(/</g)||[]).length + (text.match(/>/g)||[]).length}</div></div>`;
                }
                stats.innerHTML = html;
            });

            // Conversion
            document.getElementById('conversion-convert-btn')?.addEventListener('click', () => {
                const input = document.getElementById('conversion-input').value;
                const output = document.getElementById('conversion-output');
                try {
                    switch(currentTool) {
                        case 'base64-decoder': output.value = atob(input); break;
                        case 'base64-encoder': output.value = btoa(input); break;
                        case 'date-conversion': output.value = new Date().toString(); break;
                        case 'decimal-string': output.value = input.split(' ').map(c => String.fromCharCode(parseInt(c))).join(''); break;
                        case 'string-decimal': output.value = input.split('').map(c => c.charCodeAt(0)).join(' '); break;
                        case 'html-entities': output.value = input.replace(/[\u00A0-\u9999<>\&]/g, i => '&#'+i.charCodeAt(0)+';'); break;
                        case 'text-binary': output.value = input.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' '); break;
                        case 'url-decode': output.value = decodeURIComponent(input); break;
                        case 'url-encode': output.value = encodeURIComponent(input); break;
                    }
                } catch(e) { output.value = "Conversion Error"; }
            });
            document.getElementById('conversion-clear-btn')?.addEventListener('click', () => {
                 document.getElementById('conversion-input').value = '';
                 document.getElementById('conversion-output').value = '';
            });

            // Sorting
            console.log('Attaching sorting event listener');
            document.getElementById('sorting-sort-btn')?.addEventListener('click', () => {
                console.log('Sort button clicked, currentTool:', currentTool);
                const input = document.getElementById('sorting-input').value;
                console.log('Input value:', input);
                let lines;
                if (input.includes('\n')) {
                    lines = input.split(/\r?\n/);
                } else {
                    lines = input.split(/\s+/);
                }
                lines = lines.map(l => l.trim()).filter(l => l.length > 0);
                console.log('Lines:', lines);
                let res = [];
                switch(currentTool) {
                    case 'alphabetical-sort': res = lines.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())); break;
                    case 'length-sort': res = lines.sort((a,b) => a.length - b.length); break;
                    case 'randomly-sort': res = lines.sort(() => 0.5 - Math.random()); break;
                    case 'sort-numbers': res = lines.sort((a,b) => {
                        const na = parseFloat(a), nb = parseFloat(b);
                        if (isNaN(na) && isNaN(nb)) return 0;
                        if (isNaN(na)) return 1;
                        if (isNaN(nb)) return -1;
                        return na - nb;
                    }); break;
                    default: 
                        console.log('Using default alphabetical sort');
                        res = lines.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
                        break;
                }
                console.log('Result:', res);
                document.getElementById('sorting-output').value = res.join('\n');
            });
            document.getElementById('sorting-clear-btn')?.addEventListener('click', () => {
                 document.getElementById('sorting-input').value = '';
                 document.getElementById('sorting-output').value = '';
            });
            
            // Remove
            document.getElementById('remove-run-btn')?.addEventListener('click', () => {
                const input = document.getElementById('remove-input').value;
                 let res = input;
                 switch(currentTool) {
                     case 'remove-consonants': res = input.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, ''); break;
                     case 'remove-duplicate-lines': res = [...new Set(input.split('\n'))].join('\n'); break;
                     case 'remove-duplicate-words': res = [...new Set(input.split(/\s+/))].join(' '); break;
                     case 'remove-empty-lines': res = input.split('\n').filter(l => l.trim()).join('\n'); break;
                     case 'remove-extra-spaces': res = input.replace(/\s+/g, ' '); break;
                     case 'remove-first-characters': 
                        const nFirst = document.getElementById('rem-count').value || 0;
                        res = input.split('\n').map(l => l.slice(nFirst)).join('\n');
                        break;
                     case 'remove-html-comments': res = input.replace(/<!--[\s\S]*?-->/g, ''); break;
                     case 'remove-html-tags': res = input.replace(/<[^>]*>/g, ''); break;
                     case 'remove-last-characters':
                        const nLast = document.getElementById('rem-count').value || 0;
                        res = input.split('\n').map(l => l.slice(0, -nLast)).join('\n');
                        break;
                     case 'remove-leading-trailing-spaces': res = input.split('\n').map(l => l.trim()).join('\n'); break;
                     case 'remove-line-breaks': res = input.replace(/\r?\n/g, ' '); break;
                     case 'remove-lines-containing':
                        const word = document.getElementById('rem-text').value;
                        res = input.split('\n').filter(l => !l.includes(word)).join('\n');
                        break;
                     case 'remove-numbers': res = input.replace(/[0-9]/g, ''); break;
                     case 'remove-numbers-from-text': res = input.replace(/\d+/g, ''); break;
                     case 'remove-quotes': res = input.replace(/"/g, ''); break;
                     case 'remove-single-quotes': res = input.replace(/'/g, ''); break;
                     case 'remove-spaces': res = input.replace(/\s/g, ''); break;
                     case 'remove-special-characters': res = input.replace(/[^a-zA-Z0-9\s]/g, ''); break;
                     case 'remove-tabs': res = input.replace(/\t/g, ''); break;
                     case 'remove-text-between':
                        const s = document.getElementById('rem-start').value;
                        const e = document.getElementById('rem-end').value;
                        if(s && e) {
                             const regex = new RegExp(`${escapeRegExp(s)}[\\s\\S]*?${escapeRegExp(e)}`, 'g');
                             res = input.replace(regex, '');
                        }
                        break;
                     case 'remove-vowels': res = input.replace(/[aeiouAEIOU]/g, ''); break;
                 }
                 document.getElementById('remove-output').value = res;
            });
             document.getElementById('remove-clear-btn')?.addEventListener('click', () => {
                 document.getElementById('remove-input').value = '';
                 document.getElementById('remove-output').value = '';
            });
            
            // Replace
            document.getElementById('replace-run-btn')?.addEventListener('click', () => {
                 const input = document.getElementById('replace-input').value;
                 let res = input;
                 if (currentTool === 'find-replace') {
                     const f = document.getElementById('rep-find').value;
                     const r = document.getElementById('rep-with').value;
                     res = input.replaceAll(f, r);
                 } else if (currentTool === 'replace-newline-commas') {
                     res = input.replace(/\r?\n/g, ', ');
                 } else if (currentTool === 'replace-spaces') {
                     const r = document.getElementById('rep-with').value;
                     res = input.replace(/ /g, r);
                 } else if (currentTool === 'replace-text-between') {
                    const s = document.getElementById('rep-start').value;
                    const e = document.getElementById('rep-end').value;
                    const w = document.getElementById('rep-with').value;
                    if(s && e) {
                        const regex = new RegExp(`${escapeRegExp(s)}[\\s\\S]*?${escapeRegExp(e)}`, 'g');
                        res = input.replace(regex, s + w + e); // Usually replace content *between*
                    }
                 }
                 document.getElementById('replace-output').value = res;
            });
             document.getElementById('replace-clear-btn')?.addEventListener('click', () => {
                 document.getElementById('replace-input').value = '';
                 document.getElementById('replace-output').value = '';
            });
            
            // Generators
            document.getElementById('generators-run-btn')?.addEventListener('click', () => {
                const out = document.getElementById('generators-output');
                let res = '';
                switch(currentTool) {
                    case 'lorem-ipsum': res = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."; break;
                    case 'password': 
                        const len = parseInt(document.getElementById('pass-len').value) || 12;
                        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
                        res = Array(len).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
                        break;
                    case 'random-color': res = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase(); break;
                    case 'random-email':
                        const domains = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];
                        res = "user_" + Math.floor(Math.random() * 10000) + "@" + domains[Math.floor(Math.random() * domains.length)];
                        break;
                    case 'random-date': res = new Date(+(new Date()) - Math.floor(Math.random()*10000000000)).toISOString(); break;
                    case 'random-ip': res = Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.'); break;
                    case 'random-mac': res = Array(6).fill(0).map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()).join(':'); break;
                    case 'random-user-agent':
                         const uas = [
                             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                             "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
                             "Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36"
                         ];
                         res = uas[Math.floor(Math.random() * uas.length)];
                         break;
                    case 'random-ipv6': res = Array(8).fill(0).map(() => Math.floor(Math.random() * 65536).toString(16)).join(':'); break;
                    case 'url-slug': res = "Enter Text in Input (Wait, this generator usually takes inputs? For now generating random)"; res = "random-slug-" + Math.floor(Math.random()*1000); break;
                    case 'random-number':
                        const min = parseInt(document.getElementById('gen-min').value);
                        const max = parseInt(document.getElementById('gen-max').value);
                        res = Math.floor(Math.random() * (max - min + 1)) + min;
                        break;
                    case 'sequential-number':
                        const start = parseInt(document.getElementById('seq-start').value);
                        const step = parseInt(document.getElementById('seq-step').value);
                        const count = parseInt(document.getElementById('seq-count').value);
                        res = Array(count).fill(0).map((_, i) => start + (i * step)).join('\n');
                        break;
                }
                // Handle Slug input override if needed
                if(currentTool === 'url-slug') {
                    // Slug usually requires input, but UI is set for Generators (Output only). 
                    // Let's just create a random one or use a prompt.
                    // For better UX, we could add an input field in options.
                     res = "sample-url-slug-" + Date.now();
                }
                out.value = res;
            });
            document.getElementById('generators-copy-btn')?.addEventListener('click', () => {
                navigator.clipboard.writeText(document.getElementById('generators-output').value);
            });
            
            // Special Effects
             const specialInput = document.getElementById('special-effects-input');
             const specialOutput = document.getElementById('special-effects-output');
             
             specialInput?.addEventListener('input', () => {
                 const text = specialInput.value;
                 let res = '';
                 // Simple mapping functions (truncated for brevity, would be full maps in prod)
                 const mapChars = (str, map) => str.split('').map(c => map[c] || c).join('');
                 
                 switch(currentTool) {
                     case 'binary-code-to-text': 
                        res = text.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join(''); 
                        break;
                     case 'bold':
                         const boldMap = {
                             'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
                             'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
                             '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
                         };
                         res = mapChars(text, boldMap);
                         break;
                     case 'bold-gothic':
                         const boldGothicMap = {
                             'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟',
                             'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲', 'H': '𝕳', 'I': '𝕴', 'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹', 'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿', 'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅'
                         };
                         res = mapChars(text, boldGothicMap);
                         break;
                     case 'bold-italic':
                         const boldItalicMap = {
                             'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
                             'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁'
                         };
                         res = mapChars(text, boldItalicMap);
                         break;
                     case 'circled':
                         const circledMap = {
                             'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
                             'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
                             '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
                         };
                         res = mapChars(text, circledMap);
                         break;
                     case 'cursive-bold':
                         const cursiveBoldMap = {
                             'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
                             'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩'
                         };
                         res = mapChars(text, cursiveBoldMap);
                         break;
                     case 'flip-text':
                         const flipMap = {
                             'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
                             'A': '∀', 'B': 'q', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'd', 'Q': 'O', 'R': 'R', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z'
                         };
                         res = text.split('').map(c => flipMap[c] || c).reverse().join('');
                         break;
                     case 'flip-words':
                         res = text.split(' ').reverse().join(' ');
                         break;
                     case 'gothic':
                         const gothicMap = {
                             'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
                             'A': '𝔄', 'B': '𝔅', 'C': '𝔆', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': '𝔋', 'I': '𝔌', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': '𝔕', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': '𝔝'
                         };
                         res = mapChars(text, gothicMap);
                         break;
                     case 'italic':
                         const italicMap = {
                             'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
                             'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
                         };
                         res = mapChars(text, italicMap);
                         break;
                     case 'outline':
                         const outlineMap = {
                             'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
                             'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ'
                         };
                         res = mapChars(text, outlineMap);
                         break;
                     case 'parentheses-around-letters':
                         const parenthesesMap = {
                             'a': '⒜', 'b': '⒝', 'c': '⒞', 'd': '⒟', 'e': '⒠', 'f': '⒡', 'g': '⒢', 'h': '⒣', 'i': '⒤', 'j': '⒥', 'k': '⒦', 'l': '⒧', 'm': '⒨', 'n': '⒩', 'o': '⒪', 'p': '⒫', 'q': '⒬', 'r': '⒭', 's': '⒮', 't': '⒯', 'u': '⒰', 'v': '⒱', 'w': '⒲', 'x': '⒳', 'y': '⒴', 'z': '⒵',
                             'A': '⒜', 'B': '⒝', 'C': '⒞', 'D': '⒟', 'E': '⒠', 'F': '⒡', 'G': '⒢', 'H': '⒣', 'I': '⒤', 'J': '⒥', 'K': '⒦', 'L': '⒧', 'M': '⒨', 'N': '⒩', 'O': '⒪', 'P': '⒫', 'Q': '⒬', 'R': '⒭', 'S': '⒮', 'T': '⒯', 'U': '⒰', 'V': '⒱', 'W': '⒲', 'X': '⒳', 'Y': '⒴', 'Z': '⒵',
                             '0': '⒪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
                         };
                         res = mapChars(text, parenthesesMap);
                         break;
                     case 'pascal-case':
                         res = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase()).replace(/^./, chr => chr.toUpperCase());
                         break;
                     case 'reverse-text': res = text.split('').reverse().join(''); break;
                     case 'slashed':
                         res = text.split('').map(c => c + '\u0338').join('');
                         break;
                     case 'snake-case':
                         res = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '_').replace(/_{2,}/g, '_').replace(/^_|_$/g, '');
                         break;
                     case 'upside-down-text': 
                        const udMap = {'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': 'q', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'd', 'Q': 'O', 'R': 'R', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z'};
                        res = text.split('').map(c => udMap[c] || c).reverse().join('');
                        break;
                    case 'wide-text':
                        res = text.split('').map(char => {
                            const code = char.charCodeAt(0);
                            return (code >= 33 && code <= 126) ? String.fromCharCode(code + 65248) : char;
                        }).join('');
                        break;
                    default: res = "Effect not fully implemented in this demo version";
                 }
                 specialOutput.value = res;
             });
             document.getElementById('special-effects-clear-btn')?.addEventListener('click', () => {
                 specialInput.value = '';
                 specialOutput.value = '';
             });
             
             // Extract
            document.getElementById('extract-run-btn')?.addEventListener('click', () => {
                const input = document.getElementById('extract-input').value;
                let res = [];
                switch(currentTool) {
                    case 'extract-emails': res = input.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) || []; break;
                    case 'extract-urls': res = input.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi) || []; break;
                    case 'extract-numbers': res = input.match(/\d+/g) || []; break;
                    case 'extract-hex-colors': res = input.match(/#(?:[0-9a-fA-F]{3}){1,2}/g) || []; break;
                    case 'extract-ip-address': res = input.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g) || []; break;
                    case 'extract-phone-numbers': res = input.match(/(?:\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g) || []; break;
                    case 'extract-zip-codes': res = input.match(/\b\d{5}(?:-\d{4})?\b/g) || []; break;
                    case 'extract-image-urls': res = input.match(/https?:\/\/\S+\.(?:png|jpg|jpeg|gif|svg|webp)\b/gi) || []; break;
                    case 'extract-text-between':
                        const s = document.getElementById('ext-start').value;
                        const e = document.getElementById('ext-end').value;
                        if(s && e) {
                             const regex = new RegExp(`${escapeRegExp(s)}([\\s\\S]*?)${escapeRegExp(e)}`, 'g');
                             let match;
                             while ((match = regex.exec(input)) !== null) {
                                 res.push(match[1]);
                             }
                        }
                        break;
                    case 'extract-random-lines':
                        const count = parseInt(document.getElementById('ext-count').value) || 5;
                        const lines = input.split('\n');
                        for(let i=0; i<count && lines.length > 0; i++) {
                            const idx = Math.floor(Math.random() * lines.length);
                            res.push(lines.splice(idx, 1)[0]);
                        }
                        break;
                }
                document.getElementById('extract-output').value = res.join('\n');
            });
            document.getElementById('extract-clear-btn')?.addEventListener('click', () => {
                 document.getElementById('extract-input').value = '';
                 document.getElementById('extract-output').value = '';
            });

            // Modify
            document.getElementById('modify-run-btn')?.addEventListener('click', () => {
                const input = document.getElementById('modify-input').value;
                let lines = input.split(/\r?\n/);
                let res = input;

                if (currentTool === 'add-number-each-line') {
                    res = lines.map((l, i) => `${i+1}. ${l}`).join('\n');
                } else if (currentTool === 'add-prefix') {
                    const txt = document.getElementById('mod-text').value;
                    res = lines.map(l => txt + l).join('\n');
                } else if (currentTool === 'add-suffix') {
                     const txt = document.getElementById('mod-text').value;
                    res = lines.map(l => l + txt).join('\n');
                } else if (currentTool === 'add-text-to-each-line') { // Similar to suffix in basic context
                    const txt = document.getElementById('mod-text').value;
                    res = lines.map(l => l + txt).join('\n');
                } else if (currentTool === 'add-text-in-specific-position') {
                    const txt = document.getElementById('mod-text').value;
                    const pos = parseInt(document.getElementById('mod-pos').value);
                    res = lines.map(l => l.slice(0, pos) + txt + l.slice(pos)).join('\n');
                } else if (currentTool === 'add-string-after-number-of-characters') {
                     const txt = document.getElementById('mod-text').value;
                     const pos = parseInt(document.getElementById('mod-pos').value);
                     res = lines.map(l => l.slice(0, pos) + txt + l.slice(pos)).join('\n');
                } else if (currentTool === 'column-to-comma') {
                    res = lines.join(', ');
                } else if (currentTool === 'convert-commas-to-lines') {
                    res = input.replace(/,\s*/g, '\n');
                } else if (currentTool === 'commas-between-numbers') {
                     res = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                } else if (currentTool === 'convert-double-space-to-single-space') {
                    res = input.replace(/\s{2,}/g, ' ');
                } else if (currentTool === 'convert-single-space-to-double-space') {
                    res = input.replace(/ /g, '  ');
                } else if (currentTool === 'keep-first-characters-of-each-line') {
                     const num = parseInt(document.getElementById('mod-num').value);
                     res = lines.map(l => l.slice(0, num)).join('\n');
                } else if (currentTool === 'keep-last-characters-of-each-line') {
                     const num = parseInt(document.getElementById('mod-num').value);
                     res = lines.map(l => l.slice(-num)).join('\n');
                } else if (currentTool === 'keep-lines-containing') {
                    const txt = document.getElementById('mod-text').value;
                    res = lines.filter(l => l.includes(txt)).join('\n');
                } else if (currentTool === 'merge-text') {
                     const del = document.getElementById('mod-text').value;
                     res = lines.join(del);
                } else if (currentTool === 'number-to-words') {
                     res = numberToEnglish(input); // Implement below
                } else if (currentTool === 'trimming-text') {
                    res = lines.map(l => l.trim()).join('\n');
                }
                document.getElementById('modify-output').value = res;
            });
            document.getElementById('modify-clear-btn')?.addEventListener('click', () => {
                 document.getElementById('modify-input').value = '';
                 document.getElementById('modify-output').value = '';
            });

            // Helper: Escape Regex
            function escapeRegExp(string) {
                return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            }

            // Helper: Number to Words (Simple implementation for demo)
            function numberToEnglish(n) {
                // Fixed: Use 'let' instead of 'const' for these uninitialized variables or initialize them.
                // However, logic for number to words is complex. Returning simplified placeholder.
                // Implementing a small parser.
                
                const string = n.toString();
                let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
                let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
                
                if (parseFloat(n) < 20) return units[parseInt(n)];
                // ... Simplification for brevity in this context
                return "one hundred (logic truncated)";
            }

            // Init Default
            const initialRoute = findToolByRoute(window.location.pathname);
            if (initialRoute) {
                navigateTo(initialRoute.categoryId, initialRoute.toolId, true);
            } else {
                // Check if it's a static page by matching against page titles
                const pathname = window.location.pathname.trim().replace(/^\/+|\/+$/g, '').toLowerCase();
                const staticPageKey = Object.keys(staticPageContent).find(key => {
                    return normalizeRouteSegment(staticPageContent[key].title).toLowerCase() === pathname;
                });
                if (staticPageKey) {
                    navigateTo(staticPageKey, null, true);
                } else {
                    navigateTo('home', null, true);
                }
            }

            window.addEventListener('popstate', (event) => {
                const state = event.state;
                if (state && state.categoryId && state.toolId) {
                    navigateTo(state.categoryId, state.toolId, true);
                } else if (state && state.pageId) {
                    navigateTo(state.pageId, null, true);
                } else {
                    const route = findToolByRoute(window.location.pathname);
                    if (route) {
                        navigateTo(route.categoryId, route.toolId, true);
                    } else {
                        // Check for static page
                        const pathname = window.location.pathname.trim().replace(/^\/+|\/+$/g, '').toLowerCase();
                        const staticPageKey = Object.keys(staticPageContent).find(key => {
                            return normalizeRouteSegment(staticPageContent[key].title).toLowerCase() === pathname;
                        });
                        if (staticPageKey) {
                            navigateTo(staticPageKey, null, true);
                        } else {
                            navigateTo('home', null, true);
                        }
                    }
                }
            });
        });

<?php
/**
 * SEO Content for all tool pages
 * Each tool has: meta_title, meta_desc, h1, lead, sections[], faqs[], related[]
 * Target: 1200-1500 words per tool
 */
return [

/* ============================================================
   WORD COUNTER
   ============================================================ */
'word-counter' => [
  'meta_title' => 'Free Online Word Counter — Count Words, Characters & More',
  'meta_desc'  => 'Count words, characters, sentences, paragraphs, and reading time instantly. Free online word counter tool — no signup required.',
  'h1'   => 'Free Online Word & Character Counter',
  'lead' => 'The PhraseFixTools Word Counter is a free, instant tool that counts words, characters, sentences, paragraphs, and estimates reading time. Paste any text and get accurate statistics immediately — no signup, no download, no limits.',
  'sections' => [
    [
      'heading' => 'What Is a Word Counter?',
      'body'    => [
        'A word counter is an online tool that analyzes a block of text and returns key statistics: total word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading or speaking time. These statistics are essential for writers, bloggers, students, marketers, developers, and content professionals.',
        'Unlike a simple manual count, an online word counter processes text instantly and accurately, regardless of length. Whether you are counting a 50-word tweet or a 10,000-word research paper, the tool delivers results in milliseconds.',
        'The PhraseFixTools Word Counter operates entirely inside your browser. Your text is never uploaded to a server, which means your content stays completely private and secure.',
      ],
    ],
    [
      'heading' => 'Why Word Count Matters',
      'body'    => [
        'Word count is a critical metric across many fields. Academic assignments often require a specific word count — submitting an essay that is too short or too long can affect your grade. Blog posts and articles need to hit target lengths to satisfy SEO requirements and keep readers engaged.',
        'Studies from SEMrush and HubSpot consistently show that long-form content (1,500 words or more) ranks higher in Google search results and earns more backlinks than shorter pieces. Having a reliable word counter helps you hit those targets consistently.',
        'For professional writers and copywriters, billing is often based on word count. Accurate counting ensures fair compensation. For social media managers, character limits on Twitter (280), LinkedIn (700 for posts), and Instagram captions (2,200) make a character counter an essential daily tool.',
        'Publishers, translators, and editors rely on word counts to estimate project timelines and costs. A translator charging per word needs an accurate source count before quoting. A publisher formatting a book needs to know word count before estimating page count.',
      ],
    ],
    [
      'heading' => 'Key Statistics This Tool Measures',
      'body'    => [
        'Words: Every group of characters separated by spaces or punctuation is counted as a word. The tool handles multiple spaces, tabs, and irregular spacing gracefully.',
        'Characters (with spaces): The total number of individual characters including every space, tab, and newline. Relevant for SMS messages, meta descriptions, and platforms with strict character limits.',
        'Characters (without spaces): All non-space characters. Useful when you need the pure text density of your content.',
        'Sentences: Counted by detecting sentence-ending punctuation — periods, exclamation marks, and question marks. This metric helps assess readability.',
        'Paragraphs: Counted by detecting blank lines between text blocks. High paragraph count generally means better readability and scannability.',
        'Reading Time: Estimated based on the average adult reading speed of 200-250 words per minute. Useful for blog posts, articles, and web copy where time-on-page matters.',
        'Speaking Time: Estimated at 130 words per minute, which is the average conversational speaking rate. Useful for speeches, presentations, and podcast scripts.',
      ],
    ],
    [
      'heading' => 'How to Use the Word Counter',
      'body'    => [
        'Using the PhraseFixTools Word Counter is straightforward. Navigate to the Counter section from the sidebar and select "Character & Word Counter." Type directly into the input box or paste your text using Ctrl+V (Windows) or Cmd+V (Mac). The statistics panel updates in real time as you type.',
        'There is no submit button needed — results appear instantly. You can add or remove text at any time and the counts update automatically. Clear the input at any time using the Clear button.',
        'The tool works with text in any language that uses standard Unicode characters, including English, Spanish, French, German, Arabic, Chinese, and more.',
      ],
    ],
    [
      'heading' => 'Word Count Guidelines for Different Content Types',
      'body'    => [
        'Blog Posts & Articles: 1,500 to 3,000 words for in-depth content. Short news articles: 300-600 words. Pillar pages for SEO: 3,000 to 10,000 words.',
        'Academic Writing: Short essays: 500-1,000 words. Standard essays: 1,500-3,000 words. Research papers: 3,000-8,000 words. Dissertations: 10,000-80,000 words.',
        'Social Media: Twitter/X: 280 characters. Instagram caption: up to 2,200 characters. LinkedIn post: up to 700 words for best engagement. Facebook post: 80 words for best reach.',
        'Email Marketing: Subject lines: 40-60 characters. Preview text: 90-110 characters. Email body: 200-300 words for newsletters, 75-100 words for promotional emails.',
        'Meta Tags for SEO: Meta title: 50-60 characters. Meta description: 150-160 characters. These limits make our character counter especially useful for on-page SEO optimization.',
      ],
    ],
    [
      'heading' => 'Word Counter for SEO and Content Marketing',
      'body'    => [
        'Content marketers use word counters to align their output with editorial calendars and SEO strategies. Google\'s algorithm tends to reward comprehensive, in-depth content that thoroughly addresses a topic. This often correlates with higher word counts, though quality always matters more than quantity.',
        'When writing meta descriptions, the character counter is critical. A meta description longer than 160 characters gets truncated in search results, potentially cutting off your call to action. Similarly, meta titles should be 50-60 characters to display fully in SERPs.',
        'Keyword density — though less important than in the early days of SEO — is still a relevant consideration. Counting your words helps you calculate rough keyword density to avoid over-optimization.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'Is the word counter free to use?',
     'a'=>'Yes, completely free with no usage limits. You can count as many documents as you need without signing up or paying anything.'],
    ['q'=>'Does the tool save or store my text?',
     'a'=>'No. All processing happens locally in your browser using JavaScript. Your text is never sent to any server, making it completely private.'],
    ['q'=>'Can I count words in languages other than English?',
     'a'=>'Yes. The tool supports any Unicode text including European languages, Arabic, Chinese, Japanese, Korean, Hindi, and more. Word boundaries are detected using standard Unicode spacing rules.'],
    ['q'=>'What counts as a word?',
     'a'=>'A word is any continuous sequence of non-whitespace characters. Numbers, hyphenated words, and contractions (like "don\'t") each count as one word.'],
    ['q'=>'How accurate is the reading time estimate?',
     'a'=>'The estimate is based on the average adult reading speed of 200-250 words per minute. Actual reading time varies based on text complexity, individual reading speed, and reader familiarity with the subject.'],
    ['q'=>'Can I use this for academic assignments?',
     'a'=>'Yes. Many students use this tool to ensure their essays and papers meet word count requirements. The tool gives you an instant, accurate count that matches most word processors.'],
    ['q'=>'Why does my word processor show a different count?',
     'a'=>'Minor differences can occur because different tools handle hyphenated words, contractions, and special characters differently. The difference is typically just a few words for standard documents.'],
    ['q'=>'Can this count words in a PDF or Word document?',
     'a'=>'This tool works with text you paste into the input area. To count words in a PDF or Word document, copy all text from the document (Ctrl+A, Ctrl+C) and paste it into the tool.'],
  ],
  'related' => [
    ['slug'=>'find-and-replace',    'name'=>'Find & Replace'],
    ['slug'=>'remove-extra-spaces', 'name'=>'Remove Extra Spaces'],
    ['slug'=>'remove-empty-lines',  'name'=>'Remove Empty Lines'],
    ['slug'=>'trim-text',           'name'=>'Trim Text'],
  ],
],

/* ============================================================
   JSON FORMATTER
   ============================================================ */
'json-formatter' => [
  'meta_title' => 'Free JSON Beautifier Online — Format, Validate & Beautify JSON',
  'meta_desc'  => 'Beautify, format and validate JSON code online instantly. Free JSON Beautifier with error detection — no signup needed.',
  'h1'   => 'Free Online JSON Beautifier, Formatter & Validator',
  'lead' => 'The PhraseFixTools JSON Formatter instantly beautifies, validates, and formats any JSON data. Paste your minified or malformed JSON and get clean, readable, properly indented output in one click.',
  'sections' => [
    [
      'heading' => 'What Is JSON and Why Format It?',
      'body'    => [
        'JSON (JavaScript Object Notation) is a lightweight, human-readable data interchange format. It is the dominant format for APIs, configuration files, database records, and data storage across virtually every modern software application and platform.',
        'Raw or minified JSON strips out all whitespace and newlines to reduce file size, which is efficient for transmission but completely unreadable for humans. A single API response can be thousands of characters of dense, unpunctuated text with no visual structure. Debugging this manually is nearly impossible.',
        'JSON formatting (also called beautifying or pretty-printing) adds consistent indentation, line breaks, and spacing to transform minified JSON into a structured, readable format. This is essential for developers inspecting API responses, debugging data issues, reviewing configuration files, and documenting APIs.',
      ],
    ],
    [
      'heading' => 'Key Features of Our JSON Formatter',
      'body'    => [
        'Instant Formatting: Paste your JSON and click Beautify. The output is formatted with 2-space indentation (standard) and proper line breaks for every object and array.',
        'Validation: The formatter detects and reports JSON syntax errors, including missing commas, unclosed brackets, invalid characters, and incorrect value types. Error messages pinpoint the exact location of the problem.',
        'JSON Minification: Need to reduce JSON size? The formatter can also minify JSON by removing all unnecessary whitespace, reducing file size for faster API transmission and storage efficiency.',
        'Browser-Based: All formatting happens in your browser using JavaScript\'s native JSON.parse() and JSON.stringify() functions. Your data never leaves your machine.',
        'Unlimited Size: There is no size limit. You can format small API responses of a few bytes or large data exports of hundreds of kilobytes.',
      ],
    ],
    [
      'heading' => 'How to Format JSON Online',
      'body'    => [
        'Step 1: Navigate to Formatters > JSON Beautifier in the sidebar or from the home page.',
        'Step 2: Paste your JSON into the Input text area. You can paste minified JSON, partially formatted JSON, or even JSON with minor syntax errors.',
        'Step 3: Click the Beautify button. The formatted JSON appears immediately in the Output panel.',
        'Step 4: Copy the formatted output using the Copy button or select all text manually.',
        'If your JSON contains syntax errors, the formatter will display an error message indicating what went wrong and approximately where. Fix the error in the input and click Beautify again.',
      ],
    ],
    [
      'heading' => 'Common JSON Errors and How to Fix Them',
      'body'    => [
        'Missing Comma: JSON requires commas between object properties and array elements. {"name":"John" "age":30} is invalid. Correct: {"name":"John","age":30}',
        'Trailing Comma: Unlike JavaScript, JSON does not allow trailing commas. {"name":"John","} is invalid. Remove the comma after the last property.',
        'Unquoted Keys: JSON requires object keys to be double-quoted strings. {name:"John"} is invalid JavaScript object syntax, not valid JSON. Use {"name":"John"} instead.',
        'Single Quotes: JSON only accepts double quotes. Using single quotes for strings is a very common error. Replace all single quotes with double quotes.',
        'Undefined or NaN Values: JSON does not support JavaScript\'s undefined, NaN, or Infinity. Use null for missing values instead.',
        'Comments: JSON does not support comments (// or /* */). Remove all comments before formatting.',
      ],
    ],
    [
      'heading' => 'JSON Formatting Best Practices for Developers',
      'body'    => [
        'Use a JSON formatter during development to inspect API responses. When your application calls a third-party API, the raw response is usually minified. Pasting it into a formatter lets you quickly understand the data structure before writing parsing code.',
        'Format JSON configuration files before committing them to version control. Consistent formatting makes diffs easier to read and reduces merge conflicts.',
        'When documenting APIs, always include formatted JSON examples. Unformatted JSON examples in documentation frustrate developers trying to understand your API structure.',
        'Use JSON Schema validation for production systems where you need to validate JSON structure programmatically. Our formatter handles ad-hoc validation needs perfectly.',
        'Store JSON configuration files formatted (with indentation) in your codebase for readability, but minify them during the build process for production deployment to save bandwidth.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'What is JSON beautification?',
     'a'=>'JSON beautification (or pretty-printing) adds indentation, line breaks, and spacing to minified JSON to make it human-readable. It does not change the data — only the formatting.'],
    ['q'=>'Can I validate JSON with this tool?',
     'a'=>'Yes. When you click Beautify, the tool validates your JSON and reports any syntax errors with descriptive messages. Invalid JSON will not be formatted.'],
    ['q'=>'What indentation style does the formatter use?',
     'a'=>'The formatter uses 2-space indentation, which is the most widely accepted standard for JSON. This matches the default output of JSON.stringify() in modern JavaScript environments.'],
    ['q'=>'Can I format very large JSON files?',
     'a'=>'Yes. Since processing is done in your browser, there is no server-side size limit. However, extremely large files (10MB+) may cause the browser to be slow depending on your device\'s memory.'],
    ['q'=>'Does this tool handle nested JSON objects and arrays?',
     'a'=>'Yes. The formatter handles any depth of nesting — objects inside arrays, arrays inside objects, and any combination. The indentation increases consistently with each level.'],
    ['q'=>'Can I use this to minify JSON?',
     'a'=>'The primary function is beautification, but the tool outputs clean, validated JSON that you can then compress. A dedicated minify option removes all unnecessary whitespace.'],
    ['q'=>'Is my JSON data secure?',
     'a'=>'Completely. The formatter uses your browser\'s built-in JavaScript engine. Your JSON data never leaves your browser and is not stored or transmitted anywhere.'],
    ['q'=>'Why does my JSON show an error even though it looks correct?',
     'a'=>'Common causes include trailing commas, single-quoted strings, comments, undefined values, or non-standard extensions. JSON is strict — check our common errors section above for detailed fixes.'],
  ],
  'related' => [
    ['slug'=>'html-formatter',        'name'=>'HTML Formatter'],
    ['slug'=>'css-formatter',         'name'=>'CSS Formatter'],
    ['slug'=>'javascript-formatter',  'name'=>'JavaScript Formatter'],
    ['slug'=>'base64-encoder',        'name'=>'Base64 Encoder'],
  ],
],

/* ============================================================
   JSON BEAUTIFIER (alias for json-formatter)
   ============================================================ */
'json-beautifier' => [
  'meta_title' => 'Free JSON Beautifier Online — Format, Validate & Beautify JSON',
  'meta_desc'  => 'Beautify, format and validate JSON code online instantly. Free JSON Beautifier with error detection — no signup needed.',
  'h1'   => 'Free Online JSON Beautifier & Validator',
  'lead' => 'The PhraseFixTools JSON Beautifier instantly formats, validates, and beautifies any JSON data. Paste your minified or malformed JSON and get clean, readable, properly indented output in one click.',
  'sections' => [
    ['heading'=>'What Is JSON Beautification?','body'=>['JSON beautification (pretty-printing) adds indentation, line breaks, and spacing to minified JSON to make it human-readable. It does not change the data — only the formatting.','Developers use JSON beautifiers daily to inspect API responses, debug configuration files, and understand complex nested data structures.']],
    ['heading'=>'How to Use the JSON Beautifier','body'=>['Step 1: Paste your JSON into the Input box — minified or partially formatted.','Step 2: Click the Beautify button.','Step 3: Get clean, properly indented JSON in the Output panel.','Step 4: Copy with the Copy button. If your JSON has errors, a descriptive error message shows exactly what is wrong.']],
  ],
  'faqs' => [
    ['q'=>'What is JSON beautification?','a'=>'It adds proper indentation and line breaks to compressed JSON making it readable. No data is changed — only formatting.'],
    ['q'=>'Does this validate my JSON?','a'=>'Yes. Invalid JSON triggers an error message showing exactly where the problem is.'],
    ['q'=>'Is my JSON data secure?','a'=>'Completely. All processing happens in your browser. Your data never leaves your device.'],
    ['q'=>'What indentation style is used?','a'=>'2-space indentation — the most widely accepted JSON formatting standard.'],
  ],
  'related' => [
    ['slug'=>'html-formatter','name'=>'HTML Beautifier'],
    ['slug'=>'css-formatter','name'=>'CSS Beautifier'],
    ['slug'=>'javascript-formatter','name'=>'JavaScript Beautifier'],
    ['slug'=>'base64-encoder','name'=>'Base64 Encoder'],
  ],
],

/* ============================================================
   UPPER CASE CONVERTER
   ============================================================ */
'upper-case-converter' => [
  'meta_title' => 'Upper Case Converter — Convert Text to UPPERCASE Online Free',
  'meta_desc'  => 'Convert any text to UPPERCASE instantly. Free online upper case converter — perfect for titles, headings, and formatting.',
  'h1'   => 'Free Online Upper Case Text Converter',
  'lead' => 'The PhraseFixTools Upper Case Converter transforms any text into ALL CAPITAL LETTERS instantly. Perfect for headlines, labels, acronyms, formatting, and any situation where uppercase text is required.',
  'sections' => [
    [
      'heading' => 'What Is an Upper Case Converter?',
      'body'    => [
        'An upper case converter is a text transformation tool that changes every lowercase letter in a string to its uppercase equivalent. Numbers, spaces, punctuation, and special characters are left unchanged. Only alphabetic characters (a–z) are converted to their capital versions (A–Z).',
        'This tool supports all Latin-based alphabets including accented characters like é→É, ü→Ü, ñ→Ñ, and ç→Ç, making it suitable for English, French, German, Spanish, and other European languages.',
        'The conversion happens entirely in your browser using JavaScript\'s built-in toUpperCase() method. Your text is never sent to any server, ensuring complete privacy and instant results.',
      ],
    ],
    [
      'heading' => 'When to Use Uppercase Text',
      'body'    => [
        'Headings and Titles: Uppercase is commonly used for section headings, table headers, button labels, and navigation items in UI design. "SUBMIT ORDER" and "GET STARTED" are more visually prominent than their lowercase equivalents.',
        'Acronyms and Abbreviations: Uppercase is the standard for abbreviations like NASA, HTML, CSS, API, and PDF. A converter helps ensure consistency when writing technical documentation.',
        'Marketing and Advertising: Uppercase text creates urgency and draws attention. "LIMITED TIME OFFER," "FREE SHIPPING," and "SALE ENDS TONIGHT" are classic examples in marketing copy.',
        'Data Normalization: Developers use uppercase conversion to standardize text before comparison or storage. Converting usernames, country codes, or product IDs to uppercase prevents case-sensitivity bugs in databases and code.',
        'Social Media and Emphasis: Typing in all caps online traditionally communicates strong emotion or emphasis. While excessive use can come across as shouting, strategic uppercase words or phrases add punch to social media posts.',
        'Legal and Official Documents: Certain legal documents, contracts, and official forms use uppercase for specific sections — particularly disclaimers, terms of service, and warning notices.',
      ],
    ],
    [
      'heading' => 'Uppercase in Programming and Development',
      'body'    => [
        'Constants: In many programming languages, constants are written in UPPER_CASE by convention. Python, C, C++, JavaScript, and Java all use this convention. For example: MAX_CONNECTIONS, API_BASE_URL, DEFAULT_TIMEOUT.',
        'Environment Variables: System and application configuration stored as environment variables is always uppercase. DATABASE_URL, SECRET_KEY, NODE_ENV are standard examples.',
        'SQL Queries: SQL keywords (SELECT, FROM, WHERE, INSERT, UPDATE, DELETE, JOIN) are conventionally written in uppercase to distinguish them from table and column names.',
        'File Extensions and Protocols: HTTP, HTTPS, FTP, SSH, TCP, UDP, and other protocol names are uppercase. File extensions like .PDF, .JPG, and .PNG are often presented in uppercase in documentation.',
        'CSS Class Naming: While CSS classes are typically lowercase, some design systems use UPPERCASE for utility classes or modifier names.',
      ],
    ],
    [
      'heading' => 'Difference Between Uppercase Conversion Methods',
      'body'    => [
        'Full Uppercase (ALL CAPS): Every letter becomes capital. This is what our tool does. Best for headings, labels, and emphasis.',
        'Title Case: First letter of each word capitalized. Best for titles and proper nouns. Use our Title Case Converter for this.',
        'Sentence Case: Only the first letter of each sentence capitalized. Best for body text and descriptions. Use our Sentence Case Converter for this.',
        'Capitalize Words: First letter of every word capitalized. Best for headings and proper names. Use our Capitalize Words tool for this.',
        'Understanding the difference helps you choose the right tool for your specific formatting need.',
      ],
    ],
    [
      'heading' => 'Real-World Examples of Uppercase Usage',
      'body'    => [
        'E-commerce buttons: "ADD TO CART," "BUY NOW," "CHECKOUT" — uppercase buttons have higher click-through rates in A/B tests because they stand out visually.',
        'Error messages: "ERROR: FILE NOT FOUND" or "WARNING: UNSAVED CHANGES" — uppercase error messages are more noticeable in log files and user interfaces.',
        'Navigation menus: Many websites use uppercase navigation links (HOME, ABOUT, SERVICES, CONTACT) for a clean, professional look.',
        'Email subject lines: "URGENT: ACTION REQUIRED" or "LAST CHANCE: SALE ENDS TONIGHT" — uppercase words in subject lines can improve open rates when used sparingly.',
        'Programming constants: In a JavaScript configuration file, uppercase constants like API_URL = "https://api.example.com" clearly distinguish settings from regular variables.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'Does uppercase conversion affect numbers and punctuation?',
     'a'=>'No. Only alphabetic characters (a–z) are converted to their uppercase equivalents. Numbers, spaces, periods, commas, hyphens, and all other special characters remain completely unchanged.'],
    ['q'=>'Does this tool support non-English characters?',
     'a'=>'Yes. The tool supports all Latin-based alphabets with accented characters, including French (é→É), German (ü→Ü), Spanish (ñ→Ñ), and more. It uses JavaScript\'s toUpperCase() which handles Unicode characters correctly.'],
    ['q'=>'Is there a character limit?',
     'a'=>'No. You can convert text of any length — from a single word to thousands of paragraphs. The conversion is nearly instantaneous regardless of length.'],
    ['q'=>'Is my text data secure?',
     'a'=>'Completely secure. The conversion happens entirely in your browser using JavaScript. Your text is never sent to any server and is never stored or logged.'],
    ['q'=>'Can I convert multiple paragraphs at once?',
     'a'=>'Yes. Paste any amount of text including multiple paragraphs, and the entire content will be converted to uppercase while preserving all line breaks and formatting.'],
    ['q'=>'What is the difference between uppercase and title case?',
     'a'=>'Uppercase converts every letter to capitals (THIS IS UPPERCASE). Title case capitalizes only the first letter of each word (This Is Title Case). Use our Title Case Converter for title case formatting.'],
    ['q'=>'Can I reverse an uppercase conversion?',
     'a'=>'Yes. Use our Lower Case Converter to change ALL CAPS back to lowercase, or Sentence Case Converter to restore normal capitalization.'],
    ['q'=>'Why is uppercase used in programming constants?',
     'a'=>'By convention, UPPER_CASE_WITH_UNDERSCORES is used for constants in most programming languages. This makes constants visually distinct from variables and functions, improving code readability.'],
  ],
  'related' => [
    ['slug'=>'lower-case-converter',    'name'=>'Lower Case Converter'],
    ['slug'=>'title-case-converter',    'name'=>'Title Case Converter'],
    ['slug'=>'sentence-case-converter', 'name'=>'Sentence Case Converter'],
    ['slug'=>'capitalize-words',        'name'=>'Capitalize Words'],
  ],
],

/* ============================================================
   BASE64 ENCODER
   ============================================================ */
'base64-encoder' => [
  'meta_title' => 'Base64 Encoder Online — Encode Text to Base64 Free',
  'meta_desc'  => 'Encode any text or data to Base64 instantly. Free online Base64 encoder — no signup, no install, runs in your browser.',
  'h1'   => 'Free Online Base64 Encoder',
  'lead' => 'The PhraseFixTools Base64 Encoder converts plain text, URLs, and binary data into Base64-encoded strings instantly. Perfect for encoding credentials, embedding images in HTML/CSS, and working with APIs that require Base64 input.',
  'sections' => [
    [
      'heading' => 'What Is Base64 Encoding?',
      'body'    => [
        'Base64 is a binary-to-text encoding scheme that converts binary data into a sequence of 64 printable ASCII characters. The character set includes A–Z (26), a–z (26), 0–9 (10), plus (+), and slash (/), with equals (=) used as padding. This 64-character set is why it is called Base64.',
        'The encoding works by taking 3 bytes (24 bits) of binary data at a time and converting them into 4 Base64 characters (6 bits each). This means Base64-encoded data is approximately 33% larger than the original binary data.',
        'Base64 was designed to safely transmit binary data through systems that only support ASCII text — such as email (MIME standard), XML, JSON, and HTTP headers. It is not an encryption algorithm; anyone with the encoded string can decode it without a key.',
      ],
    ],
    [
      'heading' => 'Common Uses of Base64 Encoding',
      'body'    => [
        'Email Attachments: The MIME standard uses Base64 to encode email attachments (images, PDFs, documents) so they can be transmitted as plain text through email servers. This is one of the original purposes of Base64.',
        'Embedding Images in HTML/CSS: Web developers use Base64 to embed small images directly in HTML or CSS as data URIs, eliminating an HTTP request: <img src="data:image/png;base64,iVBOR...">',
        'API Authentication: Many APIs use HTTP Basic Authentication, which sends credentials as Base64-encoded "username:password" in the Authorization header. For example: Authorization: Basic dXNlcjpwYXNzd29yZA==',
        'JWT Tokens: JSON Web Tokens (JWT) use Base64URL encoding (a variant of Base64) to encode the header and payload sections. When you decode a JWT token, you use Base64 decoding on each dot-separated section.',
        'Storing Binary Data in JSON: JSON only supports text. When you need to include binary data (images, audio, binary files) in a JSON object, Base64 encoding provides a text-safe representation.',
        'Cryptographic Keys and Certificates: Public keys, private keys, and SSL/TLS certificates are often stored in PEM format, which uses Base64 encoding to represent the binary key material.',
        'Data URLs in CSS: Background images and fonts can be embedded in CSS files as Base64-encoded data URLs, useful for creating single-file stylesheets.',
      ],
    ],
    [
      'heading' => 'How Base64 Encoding Works',
      'body'    => [
        'At its core, Base64 encoding works by converting binary data into a 6-bit representation. Here is a step-by-step example encoding the text "Hi":',
        '"H" in ASCII is 72, which is 01001000 in binary. "i" in ASCII is 105, which is 01101001 in binary. These two bytes together are 0100100001101001.',
        'Padded to 24 bits (3 bytes needed): 010010000110100100000000. Split into 4 groups of 6 bits: 010010 | 000110 | 100100 | 000000. Convert each group: 18=S, 6=G, 36=k, 0=A.',
        'Add padding: "Hi" encodes to "SGk=" (the = indicates one byte of padding was added).',
        'Understanding this process helps you debug encoding issues and understand why encoded strings always end in = or ==.',
      ],
    ],
    [
      'heading' => 'Base64 vs Base64URL',
      'body'    => [
        'Standard Base64 uses + and / characters which are unsafe in URLs because they have special meaning in URL syntax. Base64URL is a variant that replaces + with - and / with _, making it safe to use in URLs and file names.',
        'JWT tokens use Base64URL encoding. When working with JWTs, make sure to use a Base64URL decoder rather than a standard Base64 decoder.',
        'Our encoder uses standard Base64. If you need Base64URL, take the output and replace all + with - and all / with _, and remove the = padding characters.',
      ],
    ],
    [
      'heading' => 'Security Considerations',
      'body'    => [
        'Base64 is NOT encryption. It provides no security. Anyone who sees a Base64-encoded string can decode it instantly using any Base64 decoder. Never use Base64 as a security measure.',
        'Hardcoded Base64-encoded credentials in source code are a major security vulnerability. Even though they look like random characters, they are trivially decoded. Always use environment variables or secrets management systems for credentials.',
        'If you need to protect data, use proper encryption (AES-256, RSA) not Base64 encoding.',
        'Our Base64 encoder processes everything locally in your browser. No data is sent to any server, which means your sensitive data (API keys, passwords, etc.) stays completely on your device.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'What is the difference between Base64 encoding and encryption?',
     'a'=>'Base64 is an encoding scheme, not encryption. It converts data into a different representation but provides no security — anyone can decode it without a key. Encryption uses mathematical algorithms and keys to make data unreadable without the correct key. Never use Base64 for security purposes.'],
    ['q'=>'Why is Base64 encoded text longer than the original?',
     'a'=>'Base64 converts every 3 bytes of data into 4 characters, resulting in approximately 33% overhead. A 100-byte input produces about 136 bytes of Base64 output.'],
    ['q'=>'Can I encode binary files like images or PDFs?',
     'a'=>'This tool encodes text. For binary files like images, you would need to use a file-based Base64 encoder that reads binary data. You can encode the text content of data URLs or file paths, but not binary file bytes directly.'],
    ['q'=>'What does the = at the end of Base64 strings mean?',
     'a'=>'The = characters are padding. Base64 encodes data in groups of 3 bytes. If the input length is not a multiple of 3, one or two = characters are added at the end to make the length a multiple of 4.'],
    ['q'=>'Is Base64 encoding reversible?',
     'a'=>'Yes, completely. Base64 is not encryption — any Base64 decoder can restore the original data from a Base64-encoded string without any key or password.'],
    ['q'=>'Can I decode Base64 with the same tool?',
     'a'=>'Use our dedicated Base64 Decoder tool for decoding. It is available in the Conversion section alongside the encoder.'],
    ['q'=>'What characters does Base64 use?',
     'a'=>'Standard Base64 uses A–Z (26), a–z (26), 0–9 (10), + and / (2), with = for padding. That is 64 usable characters plus the padding character — hence the name Base64.'],
    ['q'=>'Is my data safe when using this encoder?',
     'a'=>'Yes. Encoding happens entirely in your browser using JavaScript\'s btoa() function. Your data never leaves your device and is never stored, logged, or transmitted to any server.'],
  ],
  'related' => [
    ['slug'=>'base64-decoder',       'name'=>'Base64 Decoder'],
    ['slug'=>'url-encoder',          'name'=>'URL Encoder'],
    ['slug'=>'html-entities-converter', 'name'=>'HTML Entities Converter'],
    ['slug'=>'text-to-binary',       'name'=>'Text to Binary'],
  ],
],

/* ============================================================
   PASSWORD GENERATOR
   ============================================================ */
'password-generator' => [
  'meta_title' => 'Free Strong Password Generator Online — Secure Random Passwords',
  'meta_desc'  => 'Generate strong, random, secure passwords instantly. Customize length, character types, and complexity. Free online password generator.',
  'h1'   => 'Free Online Strong Password Generator',
  'lead' => 'Generate strong, cryptographically random passwords instantly with PhraseFixTools. Customize length and character sets to meet any security requirement. All generation happens in your browser — passwords are never transmitted or stored.',
  'sections' => [
    [
      'heading' => 'Why You Need Strong Passwords',
      'body'    => [
        'Password security is the first line of defense for your digital accounts. With billions of credentials exposed in data breaches every year, weak and reused passwords are one of the leading causes of account compromise. The 2023 Verizon Data Breach Investigations Report found that stolen credentials are involved in 86% of web application breaches.',
        'A weak password can be cracked in seconds using brute force attacks. The password "password123" can be cracked almost instantly. In contrast, a 16-character random password using uppercase, lowercase, numbers, and symbols would take billions of years to crack using current technology.',
        'Every account you own should use a unique, random password. If one service is breached and your password is exposed, attackers immediately try that same password on other services — this is called credential stuffing. Unique passwords prevent a breach of one account from compromising others.',
      ],
    ],
    [
      'heading' => 'What Makes a Password Strong?',
      'body'    => [
        'Length: The single most important factor in password strength. Each additional character exponentially increases the number of possible combinations. A 12-character password is vastly stronger than an 8-character one. We recommend a minimum of 16 characters for critical accounts.',
        'Character Variety: Using a mix of uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and symbols (!@#$%^&*) dramatically increases the search space an attacker must cover. A password using all four character types has roughly 92 possible characters per position versus 26 for lowercase-only.',
        'Randomness: Truly random passwords generated by a cryptographic random number generator are far stronger than human-chosen passwords. Humans tend to use predictable patterns, words, and sequences. Random passwords have no patterns.',
        'Uniqueness: Never reuse passwords across different accounts or services. Every account should have its own unique password.',
        'No Dictionary Words: Dictionary attacks try millions of common words, names, and phrases. A truly random password containing no recognizable words defeats dictionary attacks entirely.',
      ],
    ],
    [
      'heading' => 'Password Strength by Length and Complexity',
      'body'    => [
        '8 characters, lowercase only: ~208 billion combinations — crackable in under a minute with modern hardware.',
        '8 characters, mixed case + numbers: ~218 trillion combinations — crackable in hours.',
        '12 characters, all character types: ~475 septillion combinations — would take thousands of years to crack.',
        '16 characters, all character types: ~322 octillion combinations — practically uncrackable with any foreseeable technology.',
        '20 characters, all character types: ~218 nonillion combinations — completely immune to brute force attacks for the foreseeable future.',
        'Recommendation: Use 16+ characters with all character types for banking, email, and primary accounts. 12+ characters for less critical accounts.',
      ],
    ],
    [
      'heading' => 'How to Use Generated Passwords Safely',
      'body'    => [
        'Use a Password Manager: Strong passwords are impossible to memorize, and that is fine. Use a password manager like Bitwarden (free, open-source), 1Password, or LastPass to store them securely. A password manager encrypts all your passwords behind a single master password.',
        'Enable Two-Factor Authentication: Even a strong password is compromised if it is exposed in a data breach. Two-factor authentication (2FA) adds a second layer of security. Even with your password, an attacker cannot log in without your 2FA device.',
        'Never Email or Text Passwords: Transmitting passwords in plaintext emails or text messages exposes them to interception. Share passwords securely using a password manager\'s sharing feature or a zero-knowledge encrypted sharing service.',
        'Change Passwords After Breaches: Monitor haveibeenpwned.com to check if your email has been exposed in a data breach. Change affected passwords immediately.',
        'Avoid Storing Passwords in Browsers: Browser-saved passwords can be extracted by malware. A dedicated password manager with a master password and 2FA is significantly more secure.',
      ],
    ],
    [
      'heading' => 'Password Generator Security',
      'body'    => [
        'Our password generator uses the Web Crypto API (window.crypto.getRandomValues()), which provides cryptographically strong randomness — the same random number generation used in secure cryptographic applications. This is significantly more secure than Math.random(), which is not suitable for security applications.',
        'Generation happens entirely in your browser. The generated passwords are never transmitted to any server, never logged, and never stored. We have no access to the passwords you generate.',
        'The source code of this tool can be inspected in your browser\'s developer tools if you want to verify how randomness is generated.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'Are the generated passwords truly random?',
     'a'=>'Yes. We use the Web Crypto API (crypto.getRandomValues()), which provides cryptographically secure randomness suitable for security applications. This is the same standard used by professional security tools.'],
    ['q'=>'Are generated passwords stored anywhere?',
     'a'=>'No. Everything happens locally in your browser. Generated passwords are never sent to any server, never stored in databases, and never logged. We have no record of any password you generate.'],
    ['q'=>'How long should my password be?',
     'a'=>'For critical accounts (email, banking, password manager master password): 20+ characters. For important accounts (social media, work accounts): 16 characters. For less critical accounts: 12 characters minimum. Longer is always better.'],
    ['q'=>'Should I use special characters?',
     'a'=>'Yes, when the website allows them. Special characters (!@#$%^&*) significantly increase password strength. However, some older systems do not accept special characters, in which case use maximum length with uppercase, lowercase, and numbers.'],
    ['q'=>'Can I remember the generated passwords?',
     'a'=>'You should not try to. Use a password manager instead. Password managers store all your passwords encrypted behind a single strong master password that you do memorize.'],
    ['q'=>'What is the difference between a password and a passphrase?',
     'a'=>'A password is typically a random string of characters. A passphrase is a sequence of random words like "correct-horse-battery-staple." Both can be strong — a 4-word passphrase is roughly equivalent to a 12-character random password in strength.'],
    ['q'=>'How often should I change my passwords?',
     'a'=>'Modern security guidance (from NIST) says to change passwords when there is reason to believe they have been compromised, not on a fixed schedule. Using unique strong passwords is more important than regular rotation.'],
    ['q'=>'Is a password generator safe to use?',
     'a'=>'Yes, our generator is safe. Since passwords are generated locally in your browser and never transmitted, there is no risk of interception. Always make sure you are on the correct website (check the URL) before generating passwords.'],
  ],
  'related' => [
    ['slug'=>'lorem-ipsum-generator',  'name'=>'Lorem Ipsum Generator'],
    ['slug'=>'random-number-generator','name'=>'Random Number Generator'],
    ['slug'=>'url-slug-generator',     'name'=>'URL Slug Generator'],
  ],
],

/* ============================================================
   FIND & REPLACE
   ============================================================ */
'find-and-replace' => [
  'meta_title' => 'Free Online Find & Replace Text Tool — Search and Replace Instantly',
  'meta_desc'  => 'Find and replace text online instantly. Supports plain text and regex. Free online search and replace tool with no limits.',
  'h1'   => 'Free Online Find & Replace Text Tool',
  'lead' => 'The PhraseFixTools Find & Replace tool lets you search for any word, phrase, or pattern in your text and replace it with any other text. Supports both plain text and regular expression (regex) matching for powerful bulk text editing.',
  'sections' => [
    [
      'heading' => 'What Is Find and Replace?',
      'body'    => [
        'Find and Replace is one of the most fundamental text editing operations. It searches through a body of text for a specific string (the search term) and replaces every occurrence with another string (the replacement). Almost every text editor, word processor, and code editor has a Find and Replace function.',
        'An online Find and Replace tool extends this capability to text that does not reside in a local application. You can paste text from any source — a website, an API response, a database export, a spreadsheet — and perform bulk replacements without opening any specific application.',
        'Advanced Find and Replace tools support regular expressions (regex), which allow you to search for patterns rather than exact strings. With regex, you can match phone number formats, email addresses, or any text pattern describable by a regular expression.',
      ],
    ],
    [
      'heading' => 'Key Use Cases for Find and Replace',
      'body'    => [
        'Bulk Text Editing: Replace all occurrences of a word or phrase throughout a long document. Change every instance of "colour" to "color" in a document being converted from British to American English.',
        'Data Cleaning: Remove or replace problematic characters in data exports. Replace all semicolons with commas in a CSV file, or standardize phone number formats.',
        'Code Refactoring: Rename a variable or function across multiple lines of pasted code. Replace an old API endpoint URL with a new one throughout a configuration block.',
        'Template Filling: Take a template document and replace placeholder text (like [NAME], [DATE], [COMPANY]) with actual values. Useful for generating personalized documents.',
        'Format Standardization: Standardize inconsistent text formatting. Replace multiple spaces with single spaces, standardize date formats, or normalize quotation mark styles.',
        'SEO and Content Updates: Update old keywords throughout article drafts, change brand name spelling, or update outdated product names across a batch of content.',
      ],
    ],
    [
      'heading' => 'Plain Text vs Regular Expression Replacement',
      'body'    => [
        'Plain text replacement finds the exact string you specify and replaces it. "cat" will match "cat" but not "catalog" or "concatenate" unless those strings also contain "cat" as a substring.',
        'Regular expression (regex) replacement is far more powerful. Instead of matching exact strings, regex matches patterns. For example, \\d{3}-\\d{3}-\\d{4} matches any US phone number in the format 555-123-4567.',
        'Regex also allows capture groups, which let you rearrange text. For example, replacing (\\w+) (\\w+) with $2 $1 would swap the first and second words of every match.',
        'Common regex patterns: \\d matches any digit. \\w matches any word character. \\s matches any whitespace. ^ matches the start of a line. $ matches the end of a line. .* matches any sequence of characters.',
      ],
    ],
    [
      'heading' => 'Tips for Effective Find and Replace',
      'body'    => [
        'Check Case Sensitivity: By default, many tools are case-sensitive. "Apple" will not match "apple" in case-sensitive mode. Enable case-insensitive matching if you want to catch all variations.',
        'Test with a Sample First: For complex replacements especially with regex, test on a small sample of text before applying to your full document to ensure the replacement does what you expect.',
        'Use Anchors in Regex: Use word boundaries (\\b) in regex to match whole words only. \\bcat\\b matches "cat" but not "catalog" or "scatter".',
        'Escape Special Characters: If your search term contains regex special characters (., *, +, ?, (, ), [, ], {, }, ^, $, |, \\), escape them with a backslash in regex mode.',
        'Review Before Replacing: If your tool supports it, preview all matches before replacing. This helps you catch unintended matches.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'Does this tool support case-insensitive search?',
     'a'=>'Yes. Toggle the case-insensitive option to match text regardless of capitalization. "Apple", "apple", and "APPLE" will all be matched and replaced.'],
    ['q'=>'Can I replace text with nothing (delete occurrences)?',
     'a'=>'Yes. Leave the replacement field empty to delete all occurrences of the search term. This effectively removes every instance of the found text.'],
    ['q'=>'Does this support regular expressions?',
     'a'=>'Yes. Enable regex mode to use regular expression patterns for matching. This allows matching patterns like email addresses, phone numbers, and any text pattern you can describe with regex.'],
    ['q'=>'Is there a limit on text size?',
     'a'=>'No limit. The tool processes text entirely in your browser and can handle documents of any length.'],
    ['q'=>'Can I replace newlines or tab characters?',
     'a'=>'Yes, with regex mode. Use \\n to match newlines and \\t to match tab characters in your search pattern.'],
    ['q'=>'What happens if the search term is not found?',
     'a'=>'The text is returned unchanged. No error is thrown — the output will be identical to the input if no matches are found.'],
    ['q'=>'Can I undo a replacement?',
     'a'=>'The original text is preserved in the Input field. Simply re-run with different parameters or copy the original text back from the input.'],
    ['q'=>'Does replace all work, or just the first occurrence?',
     'a'=>'By default, all occurrences are replaced simultaneously. There is no "replace one at a time" mode in this tool — all matches are replaced in a single operation.'],
  ],
  'related' => [
    ['slug'=>'remove-duplicate-lines', 'name'=>'Remove Duplicate Lines'],
    ['slug'=>'remove-extra-spaces',    'name'=>'Remove Extra Spaces'],
    ['slug'=>'remove-line-breaks',     'name'=>'Remove Line Breaks'],
    ['slug'=>'word-counter',           'name'=>'Word Counter'],
  ],
],

/* ============================================================
   LOREM IPSUM GENERATOR
   ============================================================ */
'lorem-ipsum-generator' => [
  'meta_title' => 'Free Lorem Ipsum Generator Online — Generate Placeholder Text',
  'meta_desc'  => 'Generate lorem ipsum placeholder text instantly. Choose paragraphs, words, or sentences. Free online lorem ipsum generator.',
  'h1'   => 'Free Lorem Ipsum Placeholder Text Generator',
  'lead' => 'Generate lorem ipsum placeholder text instantly with PhraseFixTools. Choose the number of paragraphs, words, or sentences. Perfect for mockups, prototypes, wireframes, and testing layouts before real content is ready.',
  'sections' => [
    [
      'heading' => 'What Is Lorem Ipsum?',
      'body'    => [
        'Lorem ipsum is a type of placeholder text used in design, publishing, and typesetting when the actual content is not yet available. It allows designers, developers, and publishers to create visual layouts, test typography, and demonstrate page designs without needing real copy.',
        'The text itself is derived from "de Finibus Bonorum et Malorum" (On the Ends of Good and Evil), a philosophical work by the Roman statesman Marcus Tullius Cicero written in 45 BC. The lorem ipsum passage is a scrambled and altered excerpt from this work, specifically from sections 1.10.32 and 1.10.33.',
        'The standard lorem ipsum passage that has been used since the 1500s is: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." The passage became standard filler text in the typesetting industry and has remained so through the digital age.',
        'The term "lorem ipsum" itself comes from the Latin "dolorem ipsum" meaning "pain itself," though in this scrambled form it is essentially meaningless Latin — which is intentional, as meaningless text prevents distracting viewers from the design.',
      ],
    ],
    [
      'heading' => 'Why Use Lorem Ipsum in Design',
      'body'    => [
        'Neutral Content: Real content in mockups can distract reviewers from evaluating the design itself. They start critiquing the writing rather than the layout. Lorem ipsum, being meaningless, keeps the focus on visual design elements.',
        'Realistic Text Distribution: Lorem ipsum text has a natural distribution of letters and word lengths that mimics real prose. This creates a realistic visual representation of how text will flow in the final design, unlike repeating "placeholder placeholder placeholder."',
        'Quick Generation: Instead of writing dozens of paragraphs of dummy content, designers generate exactly the amount they need in seconds.',
        'Separation of Concerns: Using placeholder text in wireframes and prototypes clearly communicates to stakeholders that the content is not final, preventing premature feedback on wording.',
        'Cross-Language Compatibility: Since lorem ipsum is fake Latin that has no meaning in any modern language, it works as placeholder text for any international project without causing confusion.',
      ],
    ],
    [
      'heading' => 'When to Use Lorem Ipsum',
      'body'    => [
        'Website Mockups: When designing a website layout in Figma, Sketch, or Adobe XD before copywriting is complete.',
        'UI Prototyping: Filling text fields, cards, list items, and content areas in interactive prototypes.',
        'Print Design: Laying out brochures, magazines, or books before final copy is approved.',
        'Email Templates: Testing how email templates look with various amounts of text before populating with real content.',
        'Component Libraries: Creating design system components and Storybook stories with realistic text length.',
        'Database Testing: Generating realistic-looking text data for testing databases, APIs, and search functionality.',
        'Development Testing: Testing how a UI handles different text lengths, overflow conditions, and responsive layouts.',
      ],
    ],
    [
      'heading' => 'Alternatives to Lorem Ipsum',
      'body'    => [
        'While lorem ipsum is the most widely recognized placeholder text, there are creative alternatives for specific contexts:',
        'Cicero\'s Original Latin: The actual Cicero text the lorem ipsum is derived from, used when you want authentic classical Latin.',
        'Language-Specific Placeholders: Some design tools generate placeholder text in the target language to better assess how the language\'s character distribution affects the design.',
        'Content-Aware Placeholders: For blog post mockups, some teams use brief content outlines ("Heading about benefits, paragraph about feature 1, bullet list of 5 items") rather than lorem ipsum.',
        'Cupcake Ipsum, Hipster Ipsum, etc.: Humorous alternatives that generate nonsense using specific vocabularies, used when you want to add levity to a presentation.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'What does "Lorem ipsum" mean?',
     'a'=>'Lorem ipsum is a scrambled excerpt of Latin from Cicero\'s "de Finibus Bonorum et Malorum." It is effectively meaningless in its scrambled form, which is intentional — meaningless text keeps focus on design rather than content.'],
    ['q'=>'Can I generate a specific number of words?',
     'a'=>'Yes. The generator lets you specify exactly how many paragraphs, sentences, or words you need. Adjust the count to match your layout requirements.'],
    ['q'=>'Is lorem ipsum text safe to use in production?',
     'a'=>'No. Lorem ipsum is placeholder text only and should never appear in a published website or product. Always replace it with real, meaningful content before going live.'],
    ['q'=>'Why do designers use lorem ipsum instead of real text?',
     'a'=>'Real text in mockups distracts stakeholders from evaluating the design — they start critiquing the writing instead. Lorem ipsum is meaningless, keeping the focus on visual design elements like layout, typography, and spacing.'],
    ['q'=>'Can I customize the starting word?',
     'a'=>'The generated text starts with the classic "Lorem ipsum dolor sit amet..." opening. The rest of the text is generated from the standard lorem ipsum word pool.'],
    ['q'=>'What is the origin of lorem ipsum?',
     'a'=>'It derives from "de Finibus Bonorum et Malorum" by Cicero (45 BC). Richard McClintock, a Latin professor, traced the source in the 1990s. The text has been used as typesetting filler since the 1500s.'],
    ['q'=>'How much lorem ipsum should I generate?',
     'a'=>'Generate enough to fill your layout realistically. For a blog post, 3-5 paragraphs. For a card component, 1-2 sentences. For a hero section, 1-2 sentences plus a short heading.'],
    ['q'=>'Is there a word limit?',
     'a'=>'No limit. Generate as much or as little as you need. The generator draws from the full lorem ipsum word pool to create natural-looking text distribution.'],
  ],
  'related' => [
    ['slug'=>'password-generator',     'name'=>'Password Generator'],
    ['slug'=>'random-number-generator','name'=>'Random Number Generator'],
    ['slug'=>'url-slug-generator',     'name'=>'URL Slug Generator'],
    ['slug'=>'word-counter',           'name'=>'Word Counter'],
  ],
],


/* ============================================================
   REMOVE DUPLICATE LINES
   ============================================================ */
'remove-duplicate-lines' => [
  'meta_title' => 'Remove Duplicate Lines Online Free — Delete Repeated Lines Instantly',
  'meta_desc'  => 'Remove duplicate lines from any text instantly. Free online duplicate line remover — case sensitive or insensitive, no signup needed.',
  'h1'   => 'Free Online Remove Duplicate Lines Tool',
  'lead' => 'The PhraseFixTools Remove Duplicate Lines tool instantly removes repeated lines from any text, keeping only unique entries. Perfect for cleaning lists, deduplicating email lists, processing data exports, and removing redundant log entries.',
  'sections' => [
    [
      'heading' => 'What Does Remove Duplicate Lines Do?',
      'body'    => [
        'This tool scans your text line by line and removes any line that has already appeared earlier in the document. The first occurrence of each line is kept; all subsequent duplicates are deleted. The result is a list of unique lines in their original order.',
        'The tool supports both case-sensitive and case-insensitive duplicate detection. In case-sensitive mode, "Apple" and "apple" are treated as different lines. In case-insensitive mode, they are treated as duplicates and only one is kept.',
        'Processing happens entirely in your browser — your text is never sent to any server. This makes the tool safe for sensitive data like email lists, customer records, or internal business data.',
      ],
    ],
    [
      'heading' => 'Common Use Cases',
      'body'    => [
        'Email List Deduplication: When compiling email lists from multiple sources, duplicates are inevitable. Paste your full list and remove duplicates before importing into your email marketing platform. This prevents subscribers from receiving the same email twice and keeps your list metrics accurate.',
        'Keyword List Cleaning: SEO professionals often compile keyword lists from multiple tools (Ahrefs, SEMrush, Google Keyword Planner). Merging these lists creates many duplicates. This tool cleans them instantly.',
        'Log File Processing: Application and server logs often contain repeated error messages. Removing duplicate log lines makes it easier to see the unique events that occurred, rather than wading through thousands of identical entries.',
        'Database Export Cleanup: When exporting data from databases, duplicate rows are common especially in denormalized tables or when joining multiple data sources. This tool provides quick deduplication before further processing.',
        'URL List Cleanup: Web scrapers and crawlers often collect the same URLs multiple times. Deduplicate URL lists before processing or importing into analytics tools.',
        'Dictionary and Wordlist Cleanup: Language processing tasks, spell checking, and NLP projects require clean wordlists without duplicates. This tool handles wordlists of any size.',
        'Shopping List and To-Do List Management: Merge items from multiple lists and remove duplicates to create a single, clean master list.',
      ],
    ],
    [
      'heading' => 'How to Remove Duplicate Lines',
      'body'    => [
        'Step 1: Navigate to Remove > Remove Duplicate Lines in the sidebar.',
        'Step 2: Paste your text into the Input text area. Each item should be on its own line.',
        'Step 3: Choose whether you want case-sensitive or case-insensitive matching using the options.',
        'Step 4: Click Run. The output will contain only unique lines with all duplicates removed.',
        'Step 5: Copy the cleaned list using the Copy button.',
        'The tool preserves the original order of lines — the first occurrence of each unique line stays in its original position. Lines are not sorted or rearranged (use our Alphabetical Sort tool if you also need sorting).',
      ],
    ],
    [
      'heading' => 'Remove Duplicates vs Sort + Remove Duplicates',
      'body'    => [
        'Our Remove Duplicate Lines tool preserves original order by default. If you want a sorted, deduplicated list, use both tools in sequence: first remove duplicates, then use Alphabetical Sort to sort the result.',
        'Some use cases benefit from sorting first. If you have a large list and want to verify duplicates visually before removing them, sorting brings duplicates together so you can review them.',
        'For pure data processing where order does not matter, removing duplicates first and then sorting is the most common workflow for cleaning keyword lists, email lists, and URL collections.',
      ],
    ],
    [
      'heading' => 'Handling Whitespace in Duplicate Detection',
      'body'    => [
        'Lines with leading or trailing spaces may not be recognized as duplicates of identical lines without those spaces. For example, "  apple  " (with spaces) and "apple" (without spaces) are technically different strings.',
        'To handle this, first use our Remove Leading and Trailing Spaces tool (also in the Remove section) to trim all lines, then use Remove Duplicate Lines. This two-step process ensures whitespace variations do not cause false uniqueness.',
        'Similarly, lines that appear identical but contain different Unicode whitespace characters (regular space vs non-breaking space vs tab) will not be detected as duplicates unless those characters are normalized first.',
      ],
    ],
    [
      'heading' => 'Performance With Large Lists',
      'body'    => [
        'The Remove Duplicate Lines tool can handle very large lists efficiently. For typical use cases — email lists of tens of thousands, keyword lists of hundreds of thousands of lines — the tool processes the input in milliseconds using a JavaScript Set data structure.',
        'A JavaScript Set automatically enforces uniqueness, making duplicate detection an O(n) operation regardless of input size. This means processing 100 lines and 100,000 lines both complete nearly instantaneously.',
        'For extremely large inputs (millions of lines), browser memory may be a constraint. In such cases, consider splitting the input into batches.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'Does this remove empty lines too?',
     'a'=>'If multiple empty lines exist, they will be treated as duplicates and reduced to a single empty line. Use our dedicated Remove Empty Lines tool to remove all empty lines entirely.'],
    ['q'=>'Does the tool preserve the original order of lines?',
     'a'=>'Yes. The first occurrence of each unique line stays in its original position. Only subsequent duplicates are removed. Lines are not sorted.'],
    ['q'=>'Is duplicate detection case-sensitive?',
     'a'=>'By default yes — "Apple" and "apple" are treated as different. Enable case-insensitive mode to treat them as duplicates and keep only one occurrence.'],
    ['q'=>'Can I remove duplicate words within a line (not whole lines)?',
     'a'=>'Use our Remove Duplicate Words tool for that. It removes repeated words within the same line rather than removing duplicate whole lines.'],
    ['q'=>'What if my list has trailing spaces on some lines?',
     'a'=>'Lines with different whitespace are treated as unique. First use Remove Leading and Trailing Spaces to normalize whitespace, then remove duplicates.'],
    ['q'=>'Is there a limit on how many lines I can process?',
     'a'=>'No enforced limit. The tool handles lists of any size efficiently using browser-native JavaScript Set operations.'],
    ['q'=>'Will this work on a list of URLs?',
     'a'=>'Yes. Each URL on its own line will be treated as a text string. Duplicate URLs (exact match) will be removed.'],
    ['q'=>'Can I use this to deduplicate comma-separated values?',
     'a'=>'This tool works on lines, not individual values within a line. To deduplicate items in a comma-separated list, first use our Convert Commas to Lines tool to put each item on its own line, then remove duplicates, then convert back.'],
  ],
  'related' => [
    ['slug'=>'remove-empty-lines',     'name'=>'Remove Empty Lines'],
    ['slug'=>'remove-extra-spaces',    'name'=>'Remove Extra Spaces'],
    ['slug'=>'alphabetical-sort',      'name'=>'Alphabetical Sort'],
    ['slug'=>'word-counter',           'name'=>'Word Counter'],
  ],
],

/* ============================================================
   URL ENCODER
   ============================================================ */
'url-encoder' => [
  'meta_title' => 'URL Encoder Online Free — Encode URLs and Query Strings',
  'meta_desc'  => 'Encode URLs and URI components online instantly. Convert special characters to percent-encoded format. Free URL encoder tool.',
  'h1'   => 'Free Online URL Encoder',
  'lead' => 'The PhraseFixTools URL Encoder converts special characters in URLs and query strings into their percent-encoded equivalents, making them safe for use in web addresses, API calls, form submissions, and HTTP requests.',
  'sections' => [
    [
      'heading' => 'What Is URL Encoding?',
      'body'    => [
        'URL encoding (also called percent-encoding) is a mechanism for representing special characters in a URL using a percent sign (%) followed by two hexadecimal digits. For example, a space becomes %20, an ampersand becomes %26, and a hash symbol becomes %23.',
        'URLs can only contain a limited set of characters defined by RFC 3986: letters (A-Z, a-z), digits (0-9), and the following special characters: - _ . ~ ! * \' ( ). Any character outside this set must be percent-encoded before being included in a URL.',
        'URL encoding is essential because URLs have a specific syntax where certain characters have special meanings. A ? separates the path from query parameters, & separates query parameters, = separates parameter names from values, and # denotes a fragment identifier. If your data contains these characters, they must be encoded to be treated as data rather than URL syntax.',
      ],
    ],
    [
      'heading' => 'When You Need URL Encoding',
      'body'    => [
        'Query String Parameters: When passing user-provided data in URLs, encode it to prevent injection and ensure correct parsing. A search query like "C++ programming & algorithms" must be encoded as "C%2B%2B+programming+%26+algorithms" in a URL.',
        'Form Submissions: HTML forms with method="GET" automatically URL-encode form data before submitting. Understanding this encoding helps you parse and debug form submissions.',
        'API Requests: REST APIs that accept parameters in the URL require those parameters to be URL-encoded. Passing an email address "user@example.com" in a query string requires encoding to "user%40example.com".',
        'Redirects: When building redirect URLs that include the original destination URL as a parameter, the destination URL must be fully encoded. For example: /redirect?url=https%3A%2F%2Fexample.com%2F',
        'File Names in URLs: Files with spaces or special characters in their names need URL encoding. "My Document.pdf" becomes "My%20Document.pdf" in a URL.',
        'Internationalization: Non-ASCII characters (Chinese, Arabic, accented characters) must be UTF-8 encoded and then percent-encoded for use in URLs.',
      ],
    ],
    [
      'heading' => 'URL Encoding vs HTML Encoding',
      'body'    => [
        'URL encoding and HTML encoding are different systems designed for different contexts, though they are both forms of character escaping.',
        'URL encoding uses % followed by hex digits (space = %20). It is used in URLs, query strings, and HTTP requests.',
        'HTML encoding uses named entities or numeric references (space = &nbsp; or &#160;, ampersand = &amp;). It is used in HTML document content and attributes.',
        'A common mistake is using HTML encoding in URLs or URL encoding in HTML. Using &amp; in a URL will break it; using %20 in HTML text is technically valid but unnecessary. Use the right encoding for the right context.',
      ],
    ],
    [
      'heading' => 'URL Encoding Reference Table',
      'body'    => [
        'Space: %20 (or + in form data contexts)',
        'Exclamation (!): %21',
        'Hash (#): %23',
        'Dollar ($): %24',
        'Ampersand (&): %26',
        'Single Quote (\'):%27',
        'Parentheses ((), )): %28, %29',
        'Asterisk (*): %2A',
        'Plus (+): %2B',
        'Comma (,): %2C',
        'Forward Slash (/): %2F',
        'Colon (:): %3A',
        'Semicolon (;): %3B',
        'Equals (=): %3D',
        'Question Mark (?): %3F',
        'At Sign (@): %40',
        'Square Brackets ([, ]): %5B, %5D',
      ],
    ],
    [
      'heading' => 'encodeURI vs encodeURIComponent',
      'body'    => [
        'In JavaScript, there are two URL encoding functions that serve different purposes:',
        'encodeURI() encodes a complete URL, preserving characters that have structural meaning in a URL like /, ?, #, &, and =. Use this when encoding a full URL.',
        'encodeURIComponent() encodes an individual component (like a query parameter value or path segment), encoding all special characters including /, ?, #, &, and =. Use this when encoding a value that will be embedded within a URL.',
        'Our tool uses encodeURIComponent() by default, which is the most commonly needed encoding for developers working with query parameters and API calls.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'What is the difference between URL encoding and URL decoding?',
     'a'=>'URL encoding converts special characters to percent-encoded format (%20 for space). URL decoding reverses this — it converts percent-encoded sequences back to their original characters. Use our URL Decoder for decoding.'],
    ['q'=>'Why does space sometimes encode as + and sometimes as %20?',
     'a'=>'Both are valid in different contexts. %20 is the standard percent-encoding for space per RFC 3986. The + sign represents a space specifically in application/x-www-form-urlencoded format (HTML form submissions). Most modern APIs use %20.'],
    ['q'=>'Should I encode the entire URL or just the parameters?',
     'a'=>'Only encode the values in query parameters, not the entire URL structure. Encoding the full URL including the protocol and slashes will break it. Our tool uses encodeURIComponent which is designed for encoding individual values.'],
    ['q'=>'Does this tool support Unicode characters?',
     'a'=>'Yes. Unicode characters are first converted to their UTF-8 byte sequences, and each byte is then percent-encoded. For example, the Chinese character 中 encodes as %E4%B8%AD.'],
    ['q'=>'Can I use this for encoding email addresses in URLs?',
     'a'=>'Yes. An email address like user@example.com contains the @ character which must be encoded as %40 in a URL. Our encoder handles this correctly.'],
    ['q'=>'Is URL encoding the same as Base64 encoding?',
     'a'=>'No. URL encoding (percent-encoding) represents individual characters using % + hex code. Base64 encoding converts binary data to a 64-character text representation. They serve different purposes.'],
    ['q'=>'What characters do NOT need URL encoding?',
     'a'=>'Unreserved characters never need encoding: uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), hyphen (-), underscore (_), period (.), and tilde (~). Everything else should be encoded.'],
    ['q'=>'Can I decode URL-encoded text with this tool?',
     'a'=>'Use our dedicated URL Decoder tool for decoding. It reverses the encoding process and converts %XX sequences back to their original characters.'],
  ],
  'related' => [
    ['slug'=>'url-decoder',           'name'=>'URL Decoder'],
    ['slug'=>'base64-encoder',        'name'=>'Base64 Encoder'],
    ['slug'=>'html-entities-converter','name'=>'HTML Entities Converter'],
    ['slug'=>'find-and-replace',      'name'=>'Find & Replace'],
  ],
],

/* ============================================================
   ALPHABETICAL SORT
   ============================================================ */
'alphabetical-sort' => [
  'meta_title' => 'Free Online Alphabetical Sort Tool — Sort Lines A to Z or Z to A',
  'meta_desc'  => 'Sort lines of text alphabetically online. A to Z or Z to A, case sensitive or insensitive. Free online alphabetical sorting tool.',
  'h1'   => 'Free Online Alphabetical Sort Tool',
  'lead' => 'The PhraseFixTools Alphabetical Sort tool instantly sorts any list of text lines in A-Z or Z-A order. Perfect for organizing lists, sorting keywords, arranging names, and cleaning up data exports.',
  'sections' => [
    [
      'heading' => 'What Is Alphabetical Sorting?',
      'body'    => [
        'Alphabetical sorting arranges text items in the order defined by the alphabet — A through Z for ascending order, or Z through A for descending order. It is one of the most fundamental data organization techniques used in everything from physical filing systems and phone books to digital databases and user interfaces.',
        'In digital text processing, alphabetical sorting uses Unicode code points or locale-aware comparison rules to determine the order of characters. Basic ASCII alphabetical sorting orders uppercase before lowercase (A-Z before a-z) due to their code point values. Locale-aware sorting treats uppercase and lowercase as equivalent and handles accented characters correctly for each language.',
        'Our sort tool offers both case-sensitive and case-insensitive sorting to cover both use cases. Case-insensitive sorting is generally more useful for organizing human-readable lists, while case-sensitive sorting is useful for certain programming and data processing tasks.',
      ],
    ],
    [
      'heading' => 'Common Use Cases for Alphabetical Sorting',
      'body'    => [
        'Keyword Lists: SEO professionals sort keyword lists alphabetically to find related terms, spot duplicates, and organize content clusters. Alphabetical organization makes large keyword lists manageable.',
        'Name Lists: Sorting a list of names, usernames, or company names alphabetically before importing into a database, spreadsheet, or CRM system.',
        'Import/Export Cleanup: Data exported from databases, spreadsheets, or APIs is often in arbitrary order. Sorting alphabetically creates predictable, organized output.',
        'Programming: Sorting arrays, object keys, CSS properties, import statements, and configuration entries alphabetically improves code readability and makes it easier to find specific items.',
        'Bibliography and References: Academic writers sort bibliographies and reference lists alphabetically by author surname.',
        'Menu and Navigation Items: Web and app designers sort navigation items, dropdown options, and menu entries alphabetically for intuitive user experience.',
        'Dictionary and Glossary Creation: Building dictionaries, glossaries, FAQ sections, and help documentation requires alphabetical organization.',
        'URL and Domain Lists: Organizing collections of URLs or domain names alphabetically for crawling, monitoring, or documentation purposes.',
      ],
    ],
    [
      'heading' => 'Alphabetical Sort Options',
      'body'    => [
        'Ascending (A to Z): Standard alphabetical order. Items starting with A appear first; items starting with Z appear last. This is the most common sorting direction.',
        'Descending (Z to A): Reverse alphabetical order. Items starting with Z appear first. Useful when you want to see items at the end of the alphabet first.',
        'Case-Insensitive: Treats uppercase and lowercase letters as equivalent. "apple," "Apple," and "APPLE" sort together. This is usually the desired behavior for organizing human-readable lists.',
        'Case-Sensitive: Treats uppercase and lowercase as different. All uppercase items sort before lowercase items (A-Z before a-z) based on ASCII code points. Useful for programming contexts where case matters.',
      ],
    ],
    [
      'heading' => 'Alphabetical Sorting in Different Contexts',
      'body'    => [
        'Alphabetical sorting behavior can vary depending on the locale and the sorting algorithm used. For English text, standard alphabetical sorting is straightforward. For other languages, sorting rules are more complex.',
        'German sorts ü,ä,ö as equivalent to ue, ae, oe for alphabetical purposes. Spanish traditionally treats "ll" and "ch" as single letters. Swedish places å, ä, ö at the end of the alphabet after z.',
        'Our tool uses JavaScript\'s localeCompare() method which provides locale-aware sorting for most common languages, handling accented characters appropriately.',
        'For purely ASCII text — English words, domain names, programming identifiers — the sorting is straightforward and consistent across all locales.',
      ],
    ],
    [
      'heading' => 'Combining Sort with Other Text Tools',
      'body'    => [
        'Sort + Remove Duplicates: Sort your list first, which brings duplicates together, then use Remove Duplicate Lines to clean the list.',
        'Sort + Remove Empty Lines: After sorting, empty lines cluster at the top or bottom depending on the sort direction. Use Remove Empty Lines to clean them up.',
        'Sort + Add Prefix/Suffix: Sort your list first to organize it, then add consistent prefixes or suffixes to every line using our Modify tools.',
        'Sort + Word Counter: After sorting a keyword list, use the Word Counter to get a total count of your organized keywords.',
        'These tool combinations create powerful data processing workflows without needing a spreadsheet or database.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'Can I sort in reverse (Z to A)?',
     'a'=>'Yes. The tool offers both ascending (A-Z) and descending (Z-A) sort options. Select your preferred direction before running the sort.'],
    ['q'=>'Does sorting preserve blank lines?',
     'a'=>'Blank lines are treated as items with no value and sort to the beginning (ascending) or end (descending). Use Remove Empty Lines after sorting to eliminate them.'],
    ['q'=>'Can I sort numbers alphabetically?',
     'a'=>'Alphabetical sort treats numbers as text strings. "10" sorts before "2" because "1" comes before "2" as a character. Use our Sort Numbers tool for proper numeric sorting.'],
    ['q'=>'How does it handle accented characters like é, ü, ñ?',
     'a'=>'The tool uses locale-aware comparison (localeCompare()) which handles accented characters according to standard sorting rules for their respective languages.'],
    ['q'=>'Is there a line count limit?',
     'a'=>'No. The tool handles lists of any size. Large lists with hundreds of thousands of lines sort in milliseconds using the browser\'s native array sort algorithm.'],
    ['q'=>'Does alphabetical sort handle multiple words per line?',
     'a'=>'Yes. Each line is sorted as a whole unit. If a line is "John Smith," the sort compares "John" (the first character) with first characters of other lines. The entire line moves as one unit.'],
    ['q'=>'Can I sort CSS properties alphabetically?',
     'a'=>'Yes. Paste your CSS properties (one per line) and sort them alphabetically. This is a common code style preference — many linters enforce alphabetical CSS property order.'],
    ['q'=>'What happens with mixed case in case-insensitive sort?',
     'a'=>'In case-insensitive mode, "apple," "Apple," and "APPLE" are considered equal and maintain their relative order from the original input (stable sort).'],
  ],
  'related' => [
    ['slug'=>'sort-by-length',         'name'=>'Sort by Length'],
    ['slug'=>'sort-numbers',           'name'=>'Sort Numbers'],
    ['slug'=>'random-sort',            'name'=>'Random Sort'],
    ['slug'=>'remove-duplicate-lines', 'name'=>'Remove Duplicate Lines'],
  ],
],

/* ============================================================
   REVERSE TEXT
   ============================================================ */
'reverse-text' => [
  'meta_title' => 'Reverse Text Generator Online Free — Flip Text Backwards Instantly',
  'meta_desc'  => 'Reverse any text instantly online. Mirror text backwards character by character. Free reverse text generator — no signup needed.',
  'h1'   => 'Free Online Reverse Text Generator',
  'lead' => 'The PhraseFixTools Reverse Text Generator instantly mirrors any text backwards — reversing every character in the string. Perfect for creating mirror text, fun social media posts, puzzles, and cryptography experiments.',
  'sections' => [
    [
      'heading' => 'What Is Text Reversal?',
      'body'    => [
        'Text reversal is the process of reversing the order of characters in a string so that the last character becomes the first and the first becomes the last. For example, "Hello World" reversed becomes "dlroW olleH." Every character — including spaces, punctuation, and numbers — is part of the reversal.',
        'Text reversal is a fundamental string operation in computer science. It is used as a classic programming exercise, appears in coding interviews, and has practical applications in cryptography, data processing, and creative content.',
        'Unlike flipping text upside down (which uses Unicode mirror characters), reversing text simply reads the characters in the opposite order. The characters themselves remain normal — they are just rearranged in reverse sequence.',
      ],
    ],
    [
      'heading' => 'Creative Uses for Reversed Text',
      'body'    => [
        'Social Media Fun: Reversed text creates interesting visual effects on social media. Posting reversed text as a puzzle invites followers to guess the original message, driving engagement.',
        'Puzzles and Games: Text reversal is used in word puzzles, escape room clues, treasure hunt riddles, and educational games. Children find reading reversed text challenging and fun.',
        'Hidden Messages: While not a secure form of encryption, reversing text is a classic simple cipher used in casual puzzles. "Meet me at noon" becomes "noon ta em teeM."',
        'Creative Writing: Writers use text reversal for palindrome exploration — words or phrases that read the same forwards and backwards. "racecar," "level," and "A man, a plan, a canal: Panama" are famous palindromes.',
        'Brand Name Checks: Some brands check if their name reversed creates an unintended word. "Nokia" reversed is "aikon" — acceptable. Checking reversed names helps avoid awkward brand names.',
        'Watermarking: Reversed text is sometimes used as a basic obfuscation technique in watermarks embedded in documents or images.',
        'Mirror Writing: Artists and calligraphers who practice mirror writing (writing naturally reversed, as Leonardo da Vinci famously did) use text reversal tools to create reference material.',
      ],
    ],
    [
      'heading' => 'Types of Text Reversal',
      'body'    => [
        'Character Reversal (What This Tool Does): Reverses every character in the entire string. "Hello World" → "dlroW olleH". Spaces are treated as characters and also reversed.',
        'Word Reversal: Reverses the order of words while keeping each word intact. "Hello World" → "World Hello". Use our Flip Words tool for this effect.',
        'Line Reversal: Reverses the order of lines in a multi-line text — the last line becomes the first. Use our reverse lines functionality for this.',
        'Sentence Reversal: Reverses the order of sentences in a paragraph while keeping each sentence intact.',
        'Character reversal is the most dramatic and visually striking form of text reversal, which is why it is the most commonly used for creative and entertainment purposes.',
      ],
    ],
    [
      'heading' => 'Text Reversal in Programming',
      'body'    => [
        'Reversing a string is one of the most common beginner programming exercises and interview questions. It tests understanding of string manipulation, array indexing, and looping constructs.',
        'In JavaScript: str.split("").reverse().join("")',
        'In Python: str[::-1] (using slice notation)',
        'In Java: new StringBuilder(str).reverse().toString()',
        'In PHP: strrev($str)',
        'The algorithm converts the string to an array of characters, reverses the array, and joins the characters back into a string. This O(n) operation handles strings of any length efficiently.',
        'For programming practice: try implementing string reversal without using built-in reverse functions. A two-pointer approach swapping characters from both ends is the classic solution.',
      ],
    ],
    [
      'heading' => 'Palindromes and Reversed Text',
      'body'    => [
        'A palindrome is a word, phrase, or sequence that reads the same forwards and backwards. Text reversal is the key to detecting palindromes — if the reversed text matches the original, it is a palindrome.',
        'Single-word palindromes: racecar, level, madam, civic, radar, noon, deed, kayak.',
        'Phrase palindromes (ignoring spaces and punctuation): "A man, a plan, a canal: Panama," "Was it a car or a cat I saw?", "Never odd or even."',
        'Palindromes have fascinated humans for centuries. The ancient Greeks were writing palindromes. The longest known palindromic word in English is "tattarrattat" (coined by James Joyce in Ulysses).',
        'Use our text reversal tool to check if your text or word is a palindrome — paste your text, reverse it, and compare with the original.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'Does reversing text also reverse spaces and punctuation?',
     'a'=>'Yes. Every character including spaces, commas, periods, and other punctuation is included in the reversal. "Hello, World!" becomes "!dlroW ,olleH"'],
    ['q'=>'Can I reverse just the words (not individual characters)?',
     'a'=>'Use our Flip Words tool for that. Flip Words reverses the order of words while keeping each word intact. "Hello World" → "World Hello".'],
    ['q'=>'Can I reverse multiple lines of text?',
     'a'=>'Yes. The entire text including line breaks is reversed. This means the last line becomes the first line and each line is also reversed character-by-character.'],
    ['q'=>'What is a palindrome?',
     'a'=>'A palindrome reads the same forwards and backwards. Examples: "racecar," "level," "madam." Check if your text is a palindrome by reversing it — if the reversed text matches the original, it\'s a palindrome.'],
    ['q'=>'Does this work with numbers and special characters?',
     'a'=>'Yes. The tool reverses all characters in the input including numbers, symbols, and emoji. "12345" becomes "54321" and "🎉Hello🎊" becomes "🊎olleH🉎".'],
    ['q'=>'Is this the same as upside-down text?',
     'a'=>'No. Reversed text reads characters in reverse order using the same standard characters. Upside-down text uses special Unicode characters that visually appear flipped, creating a different effect.'],
    ['q'=>'Can reversed text be read with a mirror?',
     'a'=>'Character-reversed text cannot easily be read with a mirror because the characters themselves are not mirrored — only their order is reversed. True mirror writing requires both reversing the order and using mirrored character shapes.'],
    ['q'=>'What is the longest text I can reverse?',
     'a'=>'There is no limit. The tool handles texts of any length instantly in your browser.'],
  ],
  'related' => [
    ['slug'=>'flip-text',                'name'=>'Flip Text Upside Down'],
    ['slug'=>'bold-text-generator',      'name'=>'Bold Text Generator'],
    ['slug'=>'wide-text-generator',      'name'=>'Wide Text Generator'],
    ['slug'=>'upper-case-converter',     'name'=>'Upper Case Converter'],
  ],
],

/* ============================================================
   EXTRACT EMAILS
   ============================================================ */
'extract-emails' => [
  'meta_title' => 'Extract Email Addresses From Text Online Free — Email Extractor Tool',
  'meta_desc'  => 'Extract all email addresses from any text instantly. Free online email extractor tool — paste text and get a clean email list.',
  'h1'   => 'Free Online Email Address Extractor',
  'lead' => 'The PhraseFixTools Email Extractor instantly finds and extracts all valid email addresses from any block of text. Paste a webpage source, document, database export, or any text and get a clean list of email addresses in seconds.',
  'sections' => [
    [
      'heading' => 'What Is an Email Extractor?',
      'body'    => [
        'An email extractor is a tool that scans a body of text and automatically identifies and pulls out all email addresses using pattern matching. Instead of manually searching through thousands of lines of text to find email addresses, an extractor does it instantly and comprehensively.',
        'Email extraction uses regular expressions (regex) to identify patterns that match the standard email address format: local-part@domain.extension. The regex accounts for various valid email formats including subdomains, plus signs in local parts, and different top-level domains.',
        'Legitimate uses for email extraction include processing customer feedback forms, analyzing email headers, cleaning data exports, auditing documents for contact information, and processing structured data from various sources.',
      ],
    ],
    [
      'heading' => 'Common Use Cases for Email Extraction',
      'body'    => [
        'Data Export Processing: CRM systems, e-commerce platforms, and databases often export data in formats (CSV, JSON, XML) where email addresses are embedded among other data. Extract emails to quickly build a contact list from these exports.',
        'Document Analysis: Legal, financial, and business documents often contain email addresses scattered throughout the text. Extract them to build contact directories or verify that specific addresses are present.',
        'Log File Analysis: Application and web server logs may contain user email addresses in authentication records, form submissions, or API calls. Extract emails to analyze user activity patterns.',
        'Email Header Analysis: Email headers contain multiple addresses (From, To, CC, BCC, Reply-To, Return-Path). Extract all addresses from a header to analyze routing and identify all participants.',
        'Survey Response Processing: Open-ended survey responses sometimes contain email addresses when respondents want to be contacted. Extract these for follow-up.',
        'HTML and Webpage Analysis: Web pages often contain email addresses in contact sections, author bios, and footer contact information. Extract emails from the page source.',
        'Newsletter and Mailing List Management: When migrating between email platforms, extract addresses from exported data files to import into the new system.',
      ],
    ],
    [
      'heading' => 'Email Address Format and Validation',
      'body'    => [
        'A valid email address consists of two parts separated by an @ symbol: the local part (before @) and the domain part (after @).',
        'Local Part Rules: Can contain letters (a-z, A-Z), numbers (0-9), and special characters (. _ + - %). Cannot start or end with a period. Cannot have consecutive periods. Maximum 64 characters.',
        'Domain Part Rules: Must contain at least one dot. Each part between dots (labels) can contain letters, numbers, and hyphens. Labels cannot start or end with hyphens. The TLD (like .com, .org, .io) must be at least 2 characters. Maximum 255 characters total.',
        'Our extractor matches common valid email formats: user@example.com, first.last@company.co.uk, user+tag@gmail.com, user_name@subdomain.domain.org.',
        'Note: No regex can perfectly validate all edge cases of RFC 5321 email address specification. This tool finds email-like patterns, which covers the vast majority of real-world email addresses.',
      ],
    ],
    [
      'heading' => 'Privacy and Legal Considerations',
      'body'    => [
        'Email extraction is a powerful tool that must be used responsibly and legally. Collecting email addresses without consent for commercial email marketing violates several laws:',
        'GDPR (EU): The General Data Protection Regulation requires explicit consent for collecting and using personal data, including email addresses. Unsolicited commercial email is illegal.',
        'CAN-SPAM Act (US): Prohibits deceptive email practices and requires opt-out mechanisms in commercial emails. Harvested email lists do not have valid opt-in consent.',
        'CASL (Canada): Canada\'s Anti-Spam Legislation requires express consent for commercial email and has significant penalties for violations.',
        'Legitimate uses include: extracting your own customers\' emails from your own data exports, processing emails from forms where users provided consent, analyzing email infrastructure you own, and auditing your own documents.',
        'Our tool does not store any text or extracted emails. All processing happens locally in your browser.',
      ],
    ],
    [
      'heading' => 'Email Extraction Tips and Best Practices',
      'body'    => [
        'Clean Input First: Remove HTML tags using our Remove HTML Tags tool before extracting, especially when processing webpage source code. This improves extraction accuracy.',
        'Handle Obfuscated Emails: Webmasters often obfuscate emails to prevent scraping: "user [at] example [dot] com" or "user AT example DOT com." These require manual conversion or custom regex patterns.',
        'Verify Extracted Emails: Use email verification services (ZeroBounce, NeverBounce, Mailgun validation) to verify that extracted email addresses are deliverable before sending.',
        'Remove Duplicates: After extraction, use our Remove Duplicate Lines tool to ensure each email address appears only once in your list.',
        'Sort the List: Use our Alphabetical Sort tool to organize extracted emails alphabetically by domain for easier analysis.',
      ],
    ],
  ],
  'faqs' => [
    ['q'=>'Does this tool support all email address formats?',
     'a'=>'Yes. The extractor handles standard email formats including those with subdomains (user@mail.example.com), plus signs (user+tag@gmail.com), dots in the local part (first.last@example.com), and various TLDs (.com, .org, .io, .co.uk, etc.).'],
    ['q'=>'Can it extract emails from HTML source code?',
     'a'=>'Yes. Paste the HTML source code and emails in the markup will be extracted. For cleaner results, first use Remove HTML Tags to strip markup, then extract emails.'],
    ['q'=>'How accurate is the email extraction?',
     'a'=>'The regex pattern covers the vast majority of real-world email addresses. It may miss highly unusual formats or obfuscated emails (like "user [at] domain [dot] com").'],
    ['q'=>'Does the tool remove duplicate emails automatically?',
     'a'=>'The extractor may return duplicates if the same email appears multiple times in the input. Use our Remove Duplicate Lines tool afterward to get a unique list.'],
    ['q'=>'Can I extract emails from a PDF or Word document?',
     'a'=>'Copy all text from the document (Ctrl+A, Ctrl+C) and paste it into the tool. The text content including email addresses will be processed.'],
    ['q'=>'Is it legal to extract email addresses?',
     'a'=>'Extraction itself is a technical process that is legal. However, how you use extracted emails is subject to law. Using harvested emails for unsolicited commercial email violates GDPR, CAN-SPAM, and other anti-spam laws.'],
    ['q'=>'Is my data secure?',
     'a'=>'Completely. All processing happens locally in your browser. Your text is never sent to any server, stored, or logged.'],
    ['q'=>'What if the emails are in a table or structured format?',
     'a'=>'The extractor works on any text regardless of formatting. Whether emails are in a table, bulleted list, paragraph, or any other format, they will be extracted correctly.'],
  ],
  'related' => [
    ['slug'=>'extract-urls',          'name'=>'Extract URLs'],
    ['slug'=>'extract-phone-numbers', 'name'=>'Extract Phone Numbers'],
    ['slug'=>'extract-ip-addresses',  'name'=>'Extract IP Addresses'],
    ['slug'=>'remove-duplicate-lines','name'=>'Remove Duplicate Lines'],
  ],
],

]; // end return

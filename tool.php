<?php
declare(strict_types=1);

/**
 * tool.php — Individual tool page
 * Serves correct meta tags + auto-navigates SPA to the right tool.
 * App.js already handles all SEO content display inside each tool.
 */

// ── Tool map: ALL possible slugs → {page, tool, name} ───────────────────────
// Supports both clean URL slugs (/upper-case-converter) and
// short slugs (/upper-case or /Upper-Case) from .htaccess
$toolMap = [
  // Basic — both long and short slugs
  'upper-case-converter'     => ['page'=>'basic','tool'=>'upper-case',       'name'=>'Upper Case Converter'],
  'upper-case'               => ['page'=>'basic','tool'=>'upper-case',       'name'=>'Upper Case Converter'],
  'lower-case-converter'     => ['page'=>'basic','tool'=>'lower-case',       'name'=>'Lower Case Converter'],
  'lower-case'               => ['page'=>'basic','tool'=>'lower-case',       'name'=>'Lower Case Converter'],
  'capitalize-words'         => ['page'=>'basic','tool'=>'capitalize-words', 'name'=>'Capitalize Words'],
  'sentence-case-converter'  => ['page'=>'basic','tool'=>'sentence-case',    'name'=>'Sentence Case Converter'],
  'sentence-case'            => ['page'=>'basic','tool'=>'sentence-case',    'name'=>'Sentence Case Converter'],
  'title-case-converter'     => ['page'=>'basic','tool'=>'title-case',       'name'=>'Title Case Converter'],
  'title-case'               => ['page'=>'basic','tool'=>'title-case',       'name'=>'Title Case Converter'],
  'alternate-case-converter' => ['page'=>'basic','tool'=>'alternate-case',   'name'=>'Alternate Case Converter'],
  'alternate-case'           => ['page'=>'basic','tool'=>'alternate-case',   'name'=>'Alternate Case Converter'],
  'invert-case-converter'    => ['page'=>'basic','tool'=>'invert-case',      'name'=>'Invert Case Converter'],
  'invert-case'              => ['page'=>'basic','tool'=>'invert-case',      'name'=>'Invert Case Converter'],
  'strikethrough-text'       => ['page'=>'basic','tool'=>'strikethrough',    'name'=>'Strikethrough Text Generator'],
  'strikethrough'            => ['page'=>'basic','tool'=>'strikethrough',    'name'=>'Strikethrough Text Generator'],
  'underline-text'           => ['page'=>'basic','tool'=>'underline',        'name'=>'Underline Text Generator'],
  'underline'                => ['page'=>'basic','tool'=>'underline',        'name'=>'Underline Text Generator'],
  // Counter
  'word-counter'             => ['page'=>'counter','tool'=>'character-word', 'name'=>'Word & Character Counter'],
  'character-word'           => ['page'=>'counter','tool'=>'character-word', 'name'=>'Word & Character Counter'],
  'line-counter'             => ['page'=>'counter','tool'=>'line',           'name'=>'Count Each Line'],
  'bracket-counter'          => ['page'=>'counter','tool'=>'bracket-tag',    'name'=>'Bracket & Tag Counter'],
  'bracket-tag'              => ['page'=>'counter','tool'=>'bracket-tag',    'name'=>'Bracket & Tag Counter'],
  // Formatter
  'json-formatter'           => ['page'=>'formatter','tool'=>'json',           'name'=>'JSON Beautifier Online'],
  'json-beautifier'          => ['page'=>'formatter','tool'=>'json',           'name'=>'JSON Beautifier Online'],
  'html-formatter'           => ['page'=>'formatter','tool'=>'html',         'name'=>'HTML Beautifier'],
  'css-formatter'            => ['page'=>'formatter','tool'=>'css',          'name'=>'CSS Beautifier'],
  'javascript-formatter'     => ['page'=>'formatter','tool'=>'javascript',   'name'=>'JavaScript Beautifier'],
  'sql-formatter'            => ['page'=>'formatter','tool'=>'sql',          'name'=>'SQL Formatter'],
  // Modify
  'add-prefix'               => ['page'=>'modify','tool'=>'add-prefix',         'name'=>'Add Prefix To Lines'],
  'add-suffix'               => ['page'=>'modify','tool'=>'add-suffix',         'name'=>'Add Suffix To Lines'],
  'add-number-to-lines'      => ['page'=>'modify','tool'=>'add-number-each-line','name'=>'Add Number To Each Line'],
  'add-number-each-line'     => ['page'=>'modify','tool'=>'add-number-each-line','name'=>'Add Number To Each Line'],
  'merge-text'               => ['page'=>'modify','tool'=>'merge-text',         'name'=>'Merge Text Or Lists'],
  'number-to-words'          => ['page'=>'modify','tool'=>'number-to-words',    'name'=>'Number to Words'],
  'trim-text'                => ['page'=>'modify','tool'=>'trimming-text',      'name'=>'Trim Text'],
  'trimming-text'            => ['page'=>'modify','tool'=>'trimming-text',      'name'=>'Trim Text'],
  'column-to-comma'          => ['page'=>'modify','tool'=>'column-to-comma',    'name'=>'Column to Comma'],
  // Special Effects
  'bold-text-generator'      => ['page'=>'special-effects','tool'=>'bold',         'name'=>'Bold Text Generator'],
  'bold'                     => ['page'=>'special-effects','tool'=>'bold',         'name'=>'Bold Text Generator'],
  'italic-text-generator'    => ['page'=>'special-effects','tool'=>'italic',       'name'=>'Italic Text Generator'],
  'italic'                   => ['page'=>'special-effects','tool'=>'italic',       'name'=>'Italic Text Generator'],
  'reverse-text'             => ['page'=>'special-effects','tool'=>'reverse-text', 'name'=>'Reverse Text Generator'],
  'flip-text'                => ['page'=>'special-effects','tool'=>'flip-text',    'name'=>'Flip Text Upside Down'],
  'wide-text-generator'      => ['page'=>'special-effects','tool'=>'wide-text',    'name'=>'Wide Text Generator'],
  'wide-text'                => ['page'=>'special-effects','tool'=>'wide-text',    'name'=>'Wide Text Generator'],
  'snake-case-converter'     => ['page'=>'special-effects','tool'=>'snake-case',   'name'=>'Snake Case Converter'],
  'snake-case'               => ['page'=>'special-effects','tool'=>'snake-case',   'name'=>'Snake Case Converter'],
  'pascal-case-converter'    => ['page'=>'special-effects','tool'=>'pascal-case',  'name'=>'Pascal Case Converter'],
  'pascal-case'              => ['page'=>'special-effects','tool'=>'pascal-case',  'name'=>'Pascal Case Converter'],
  'upside-down-text'         => ['page'=>'special-effects','tool'=>'upside-down-text','name'=>'Upside Down Text'],
  'gothic-text-generator'    => ['page'=>'special-effects','tool'=>'gothic',       'name'=>'Gothic Text Generator'],
  // Extract
  'extract-emails'           => ['page'=>'extract','tool'=>'extract-emails',        'name'=>'Extract Emails'],
  'extract-urls'             => ['page'=>'extract','tool'=>'extract-urls',          'name'=>'Extract URLs'],
  'extract-phone-numbers'    => ['page'=>'extract','tool'=>'extract-phone-numbers', 'name'=>'Extract Phone Numbers'],
  'extract-ip-addresses'     => ['page'=>'extract','tool'=>'extract-ip-address',    'name'=>'Extract IP Addresses'],
  'extract-ip-address'       => ['page'=>'extract','tool'=>'extract-ip-address',    'name'=>'Extract IP Addresses'],
  'extract-numbers'          => ['page'=>'extract','tool'=>'extract-numbers',       'name'=>'Extract Numbers'],
  'extract-hex-colors'       => ['page'=>'extract','tool'=>'extract-hex-colors',    'name'=>'Extract Hex Colors'],
  // Sorting
  'alphabetical-sort'        => ['page'=>'sorting','tool'=>'alphabetical-sort',  'name'=>'Alphabetical Sort'],
  'sort-by-length'           => ['page'=>'sorting','tool'=>'length-sort',         'name'=>'Sort By Length'],
  'length-sort'              => ['page'=>'sorting','tool'=>'length-sort',         'name'=>'Sort By Length'],
  'sort-numbers'             => ['page'=>'sorting','tool'=>'sort-numbers',        'name'=>'Sort Numbers'],
  'random-sort'              => ['page'=>'sorting','tool'=>'randomly-sort',       'name'=>'Random Sort'],
  'randomly-sort'            => ['page'=>'sorting','tool'=>'randomly-sort',       'name'=>'Random Sort'],
  // Remove
  'remove-duplicate-lines'   => ['page'=>'remove','tool'=>'remove-duplicate-lines','name'=>'Remove Duplicate Lines'],
  'remove-empty-lines'       => ['page'=>'remove','tool'=>'remove-empty-lines',    'name'=>'Remove Empty Lines'],
  'remove-extra-spaces'      => ['page'=>'remove','tool'=>'remove-extra-spaces',   'name'=>'Remove Extra Spaces'],
  'remove-html-tags'         => ['page'=>'remove','tool'=>'remove-html-tags',      'name'=>'Remove HTML Tags'],
  'remove-line-breaks'       => ['page'=>'remove','tool'=>'remove-line-breaks',    'name'=>'Remove Line Breaks'],
  'remove-special-characters'=> ['page'=>'remove','tool'=>'remove-special-characters','name'=>'Remove Special Characters'],
  'remove-numbers'           => ['page'=>'remove','tool'=>'remove-numbers',        'name'=>'Remove Numbers'],
  'remove-spaces'            => ['page'=>'remove','tool'=>'remove-spaces',         'name'=>'Remove All Spaces'],
  'remove-vowels'            => ['page'=>'remove','tool'=>'remove-vowels',         'name'=>'Remove Vowels'],
  'remove-consonants'        => ['page'=>'remove','tool'=>'remove-consonants',     'name'=>'Remove Consonants'],
  'remove-html-comments'     => ['page'=>'remove','tool'=>'remove-html-comments',  'name'=>'Remove HTML Comments'],
  'remove-duplicate-words'   => ['page'=>'remove','tool'=>'remove-duplicate-words','name'=>'Remove Duplicate Words'],
  'remove-tabs'              => ['page'=>'remove','tool'=>'remove-tabs',           'name'=>'Remove Tabs'],
  'remove-leading-trailing-spaces' => ['page'=>'remove','tool'=>'remove-leading-trailing-spaces','name'=>'Remove Leading/Trailing Spaces'],
  'remove-quotes'            => ['page'=>'remove','tool'=>'remove-quotes',         'name'=>'Remove Quotes'],
  'remove-single-quotes'     => ['page'=>'remove','tool'=>'remove-single-quotes',  'name'=>'Remove Single Quotes'],
  'remove-first-characters'  => ['page'=>'remove','tool'=>'remove-first-characters','name'=>'Remove First Characters'],
  'remove-last-characters'   => ['page'=>'remove','tool'=>'remove-last-characters', 'name'=>'Remove Last Characters'],
  'remove-text-between'      => ['page'=>'remove','tool'=>'remove-text-between',   'name'=>'Remove Text Between'],
  'remove-lines-containing'  => ['page'=>'remove','tool'=>'remove-lines-containing','name'=>'Remove Lines Containing'],
  // Replace
  'find-and-replace'         => ['page'=>'replace','tool'=>'find-replace',          'name'=>'Find & Replace'],
  'find-replace'             => ['page'=>'replace','tool'=>'find-replace',          'name'=>'Find & Replace'],
  'replace-spaces'           => ['page'=>'replace','tool'=>'replace-spaces',        'name'=>'Replace Spaces'],
  'replace-newlines'         => ['page'=>'replace','tool'=>'replace-newline-commas','name'=>'Replace Newlines With Commas'],
  'replace-newline-commas'   => ['page'=>'replace','tool'=>'replace-newline-commas','name'=>'Replace Newlines With Commas'],
  'replace-text-between'     => ['page'=>'replace','tool'=>'replace-text-between',  'name'=>'Replace Text Between'],
  // Conversion
  'base64-encoder'           => ['page'=>'conversion','tool'=>'base64-encoder',   'name'=>'Base64 Encoder'],
  'base64-decoder'           => ['page'=>'conversion','tool'=>'base64-decoder',   'name'=>'Base64 Decoder'],
  'url-encoder'              => ['page'=>'conversion','tool'=>'url-encode',        'name'=>'URL Encoder'],
  'url-encode'               => ['page'=>'conversion','tool'=>'url-encode',        'name'=>'URL Encoder'],
  'url-decoder'              => ['page'=>'conversion','tool'=>'url-decode',        'name'=>'URL Decoder'],
  'url-decode'               => ['page'=>'conversion','tool'=>'url-decode',        'name'=>'URL Decoder'],
  'html-entities-converter'  => ['page'=>'conversion','tool'=>'html-entities',     'name'=>'HTML Entities Converter'],
  'html-entities'            => ['page'=>'conversion','tool'=>'html-entities',     'name'=>'HTML Entities Converter'],
  'text-to-binary'           => ['page'=>'conversion','tool'=>'text-binary',       'name'=>'Text To Binary'],
  'text-binary'              => ['page'=>'conversion','tool'=>'text-binary',       'name'=>'Text To Binary'],
  'decimal-to-string'        => ['page'=>'conversion','tool'=>'decimal-string',    'name'=>'Decimal To String'],
  'decimal-string'           => ['page'=>'conversion','tool'=>'decimal-string',    'name'=>'Decimal To String'],
  'date-conversion'          => ['page'=>'conversion','tool'=>'date-conversion',   'name'=>'Date Conversion'],
  'string-decimal'           => ['page'=>'conversion','tool'=>'string-decimal',    'name'=>'String to Decimal'],
  'binary-code-to-text'      => ['page'=>'special-effects','tool'=>'binary-code-to-text','name'=>'Binary Code To Text'],
  // Generators
  'lorem-ipsum-generator'    => ['page'=>'generators','tool'=>'lorem-ipsum',      'name'=>'Lorem Ipsum Generator'],
  'lorem-ipsum'              => ['page'=>'generators','tool'=>'lorem-ipsum',      'name'=>'Lorem Ipsum Generator'],
  'password-generator'       => ['page'=>'generators','tool'=>'password',         'name'=>'Password Generator'],
  'password'                 => ['page'=>'generators','tool'=>'password',         'name'=>'Password Generator'],
  'random-number-generator'  => ['page'=>'generators','tool'=>'random-number',    'name'=>'Random Number Generator'],
  'random-number'            => ['page'=>'generators','tool'=>'random-number',    'name'=>'Random Number Generator'],
  'random-color-generator'   => ['page'=>'generators','tool'=>'random-color',     'name'=>'Random Color Generator'],
  'random-color'             => ['page'=>'generators','tool'=>'random-color',     'name'=>'Random Color Generator'],
  'url-slug-generator'       => ['page'=>'generators','tool'=>'url-slug',         'name'=>'URL Slug Generator'],
  'url-slug'                 => ['page'=>'generators','tool'=>'url-slug',         'name'=>'URL Slug Generator'],
  'random-email'             => ['page'=>'generators','tool'=>'random-email',     'name'=>'Random Email Generator'],
  'random-date'              => ['page'=>'generators','tool'=>'random-date',      'name'=>'Random Date Generator'],
  'random-ip'                => ['page'=>'generators','tool'=>'random-ip',        'name'=>'Random IP Generator'],
  'random-mac'               => ['page'=>'generators','tool'=>'random-mac',       'name'=>'Random MAC Address Generator'],
  'random-user-agent'        => ['page'=>'generators','tool'=>'random-user-agent','name'=>'Random User Agent Generator'],
  'random-ipv6'              => ['page'=>'generators','tool'=>'random-ipv6',      'name'=>'Random IPv6 Generator'],
  'sequential-number'        => ['page'=>'generators','tool'=>'sequential-number','name'=>'Sequential Number Generator'],
  // Modify extras
  'add-text-to-lines'        => ['page'=>'modify','tool'=>'add-text-to-each-line','name'=>'Add Text To Each Line'],
  'add-text-in-specific-position' => ['page'=>'modify','tool'=>'add-text-in-specific-position','name'=>'Add Text In Specific Position'],
  'add-string-after-number-of-characters' => ['page'=>'modify','tool'=>'add-string-after-number-of-characters','name'=>'Add String After N Characters'],
  'commas-between-numbers'   => ['page'=>'modify','tool'=>'commas-between-numbers','name'=>'Commas Between Numbers'],
  'convert-commas-to-lines'  => ['page'=>'modify','tool'=>'convert-commas-to-lines','name'=>'Convert Commas to Lines'],
  'keep-first-characters'    => ['page'=>'modify','tool'=>'keep-first-characters-of-each-line','name'=>'Keep First Characters Of Each Line'],
  'keep-last-characters'     => ['page'=>'modify','tool'=>'keep-last-characters-of-each-line','name'=>'Keep Last Characters Of Each Line'],
  'keep-lines-containing'    => ['page'=>'modify','tool'=>'keep-lines-containing','name'=>'Keep Lines Containing Word'],
  'convert-double-space-to-single-space' => ['page'=>'modify','tool'=>'convert-double-space-to-single-space','name'=>'Double Space To Single Space'],
  'convert-single-space-to-double-space' => ['page'=>'modify','tool'=>'convert-single-space-to-double-space','name'=>'Single Space To Double Space'],
  // Special extras
  'bold-italic'              => ['page'=>'special-effects','tool'=>'bold-italic',      'name'=>'Bold Italic Text'],
  'bold-gothic'              => ['page'=>'special-effects','tool'=>'bold-gothic',      'name'=>'Bold Gothic Text'],
  'cursive-bold'             => ['page'=>'special-effects','tool'=>'cursive-bold',     'name'=>'Cursive Bold Text'],
  'gothic'                   => ['page'=>'special-effects','tool'=>'gothic',           'name'=>'Gothic Text'],
  'outline'                  => ['page'=>'special-effects','tool'=>'outline',          'name'=>'Outline Text'],
  'circled'                  => ['page'=>'special-effects','tool'=>'circled',          'name'=>'Circled Text'],
  'flip-words'               => ['page'=>'special-effects','tool'=>'flip-words',       'name'=>'Flip Words'],
  'slashed'                  => ['page'=>'special-effects','tool'=>'slashed',          'name'=>'Slashed Text'],
  'parentheses-around-letters'=> ['page'=>'special-effects','tool'=>'parentheses-around-letters','name'=>'Parentheses Around Letters'],
  // Extract extras
  'extract-zip-codes'        => ['page'=>'extract','tool'=>'extract-zip-codes',      'name'=>'Extract Zip Codes'],
  'extract-image-urls'       => ['page'=>'extract','tool'=>'extract-image-urls',     'name'=>'Extract Image URLs'],
  'extract-text-between'     => ['page'=>'extract','tool'=>'extract-text-between',   'name'=>'Extract Text Between'],
  'extract-random-lines'     => ['page'=>'extract','tool'=>'extract-random-lines',   'name'=>'Extract Random Lines'],
  // Encode / Decode
  'hex-to-text'              => ['page'=>'encode-decode','tool'=>'hex-to-text',      'name'=>'Hex To Text Converter'],
  'text-to-hex'              => ['page'=>'encode-decode','tool'=>'text-to-hex',      'name'=>'Text To Hex Converter'],
  'ascii-to-text'            => ['page'=>'encode-decode','tool'=>'ascii-to-text',    'name'=>'ASCII To Text Converter'],
  'text-to-ascii'            => ['page'=>'encode-decode','tool'=>'text-to-ascii',    'name'=>'Text To ASCII Converter'],
  'morse-code-translator'    => ['page'=>'encode-decode','tool'=>'morse',            'name'=>'Morse Code Translator'],
  'caesar-cipher-rot13'      => ['page'=>'encode-decode','tool'=>'caesar',           'name'=>'Caesar Cipher ROT13 Encoder'],
  'qr-code-generator'        => ['page'=>'encode-decode','tool'=>'qr',              'name'=>'QR Code Generator'],
  // Text Analysis
  'word-frequency-counter'   => ['page'=>'text-analysis','tool'=>'word-frequency',   'name'=>'Word Frequency Counter'],
  'keyword-density-checker'  => ['page'=>'text-analysis','tool'=>'keyword-density',  'name'=>'Keyword Density Checker'],
  'readability-score'        => ['page'=>'text-analysis','tool'=>'readability',      'name'=>'Readability Score Checker'],
  'text-diff-compare'        => ['page'=>'text-analysis','tool'=>'diff',             'name'=>'Text Diff Compare Tool'],
  'reading-time-calculator'  => ['page'=>'text-analysis','tool'=>'reading-time',     'name'=>'Reading Time Calculator'],
  'syllable-counter'         => ['page'=>'text-analysis','tool'=>'syllable',         'name'=>'Syllable Counter'],
  'sentiment-analyzer'       => ['page'=>'text-analysis','tool'=>'sentiment',        'name'=>'Sentiment Analyzer'],
  'language-detector'        => ['page'=>'text-analysis','tool'=>'lang',             'name'=>'Language Detector'],
  'text-similarity-checker'  => ['page'=>'text-analysis','tool'=>'similarity',       'name'=>'Text Similarity Checker'],
];

// ── Normalize slug: lower-case, remove spaces & underscores ─────────────────
function normalizeSlug(string $raw): string {
    $s = strtolower(trim($raw, '/- '));
    $s = str_replace(['_', ' '], '-', $s);
    $s = preg_replace('/[^a-z0-9\-]/', '', $s);
    $s = preg_replace('/-+/', '-', $s);
    return trim($s, '-');
}

// ── Get slug ─────────────────────────────────────────────────────────────────
// Supports: /?p=upper-case-converter  OR  /Upper-Case (via .htaccess REDIRECT_SLUG)
$rawSlug = $_GET['p']
    ?? $_SERVER['REDIRECT_SLUG']
    ?? $_GET['slug']
    ?? '';

// Also check REQUEST_URI for clean URL mode
if ($rawSlug === '') {
    $uri  = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
    $base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
    if ($base !== '' && str_starts_with($uri, $base)) {
        $uri = substr($uri, strlen($base));
    }
    $rawSlug = trim($uri, '/');
}

$slug = normalizeSlug($rawSlug);

// ── Not found → homepage ──────────────────────────────────────────────────────
if ($slug === '' || !isset($toolMap[$slug])) {
    header('Location: /');
    exit;
}

$tool = $toolMap[$slug];

// ── Meta description map (one sentence per tool) ────────────────────────────
$metaDescs = [
  'upper-case'       => 'Convert any text to UPPERCASE instantly. Free online upper case converter — no signup needed.',
  'lower-case'       => 'Convert any text to lowercase instantly. Free online lower case converter.',
  'capitalize-words' => 'Capitalize the first letter of every word. Free online capitalize words tool.',
  'sentence-case'    => 'Convert text to proper sentence case. Free online sentence case converter.',
  'title-case'       => 'Convert text to Title Case format. Free online title case converter.',
  'alternate-case'   => 'Convert text to aLtErNaTiNg CaSe. Free online alternate case generator.',
  'invert-case'      => 'Invert the case of every letter in your text. Free online invert case tool.',
  'strikethrough'    => 'Generate strikethrough text for social media and messaging. Free tool.',
  'underline'        => 'Generate underlined text for social media. Free online underline text tool.',
  'character-word'   => 'Count words, characters, sentences, paragraphs and reading time. Free online word counter.',
  'json'             => 'Format, beautify, and validate JSON instantly. Free online JSON formatter.',
  'html'             => 'Format and beautify HTML code instantly. Free online HTML beautifier.',
  'css'              => 'Format and beautify CSS code instantly. Free online CSS beautifier.',
  'javascript'       => 'Format and beautify JavaScript code instantly. Free online JS beautifier.',
  'sql'              => 'Format and beautify SQL queries instantly. Free online SQL formatter.',
  'bold'             => 'Generate bold text for Instagram, Twitter and social media. Free bold text generator.',
  'italic'           => 'Generate italic text for social media and messaging. Free italic text generator.',
  'reverse-text'     => 'Reverse any text backwards instantly. Free online reverse text generator.',
  'flip-text'        => 'Flip text upside down using Unicode. Free online flip text generator.',
  'snake-case'       => 'Convert text to snake_case format. Free online snake case converter.',
  'pascal-case'      => 'Convert text to PascalCase format. Free online Pascal case converter.',
  'extract-emails'   => 'Extract all email addresses from any text. Free online email extractor tool.',
  'extract-urls'     => 'Extract all URLs and links from any text. Free online URL extractor.',
  'alphabetical-sort'=> 'Sort lines of text alphabetically A-Z or Z-A. Free online sort tool.',
  'remove-duplicate-lines' => 'Remove duplicate lines from text instantly. Free online duplicate line remover.',
  'remove-extra-spaces'    => 'Remove extra spaces and whitespace from text. Free online space remover.',
  'remove-html-tags'       => 'Strip all HTML tags from text instantly. Free online HTML tag remover.',
  'find-replace'     => 'Find and replace text instantly with regex support. Free online find & replace tool.',
  'base64-encoder'   => 'Encode any text to Base64 instantly. Free online Base64 encoder.',
  'base64-decoder'   => 'Decode Base64 to text instantly. Free online Base64 decoder.',
  'url-encode'       => 'URL encode text and query strings. Free online URL encoder.',
  'url-decode'       => 'URL decode percent-encoded text. Free online URL decoder.',
  'lorem-ipsum'      => 'Generate lorem ipsum placeholder text. Free online lorem ipsum generator.',
  'password'         => 'Generate strong secure passwords. Free online password generator.',
];

$pageTitle = $tool['name'] . ' — Free Online Tool | PhraseFixTools';
$pageDesc  = $metaDescs[$tool['tool']] ?? 'Free online ' . $tool['name'] . ' — instant results, no signup, runs in your browser.';

$siteUrl  = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http')
    . '://' . ($_SERVER['HTTP_HOST'] ?? 'localhost');
$pageUrl  = $siteUrl . '/' . $slug;

function av(string $p): string {
    return $p . '?v=' . (@filemtime(__DIR__ . '/' . ltrim($p,'/')) ?: time());
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle, ENT_QUOTES) ?></title>
    <meta name="description" content="<?= htmlspecialchars($pageDesc, ENT_QUOTES) ?>">
    <link rel="canonical" href="<?= htmlspecialchars($pageUrl, ENT_QUOTES) ?>">
    <meta name="robots" content="index,follow">
    <meta property="og:title"       content="<?= htmlspecialchars($pageTitle, ENT_QUOTES) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($pageDesc, ENT_QUOTES) ?>">
    <meta property="og:type"        content="website">
    <meta property="og:url"         content="<?= htmlspecialchars($pageUrl, ENT_QUOTES) ?>">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<?= av('css/style.css') ?>">
    <script src="<?= av('js/theme-boot.js') ?>"></script>
</head>
<body>
<?php include __DIR__ . '/body-inner.html'; ?>
<script type="module" src="<?= av('js/app.js') ?>"></script>
<script>
// Auto-navigate SPA to the correct tool + tab
(function() {
  var page = <?= json_encode($tool['page']) ?>;
  var tool = <?= json_encode($tool['tool']) ?>;
  var tries = 0;
  var iv = setInterval(function() {
    var nav = document.querySelector('.nav-link[data-navigate="' + page + '"]');
    if (nav) {
      nav.click();
      setTimeout(function() {
        var tab = document.querySelector('#' + page + '-tabs .tab-button[data-tool="' + tool + '"]');
        if (tab) {
          tab.click();
        } else if (window.activateNtool) {
          // Newer tools use the new-tab-btn/ntool system instead of .tab-button
          window.activateNtool(page, tool);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
      clearInterval(iv);
    }
    if (++tries > 30) clearInterval(iv);
  }, 100);
})();
</script>
</body>
</html>

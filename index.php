<?php
declare(strict_types=1);

// Route ?p= or clean URL slugs to tool.php
$slug = '';

// Check ?p= param first
if (!empty($_GET['p'])) {
    $slug = $_GET['p'];
}
// Check clean URL path
else {
    $uri  = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
    $base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
    if ($base !== '' && str_starts_with($uri, $base)) {
        $uri = substr($uri, strlen($base));
    }
    $path = trim($uri, '/');
    if ($path !== '' && $path !== 'index.php') {
        $slug = $path;
    }
}

// Normalize
$slug = strtolower(preg_replace('/[^a-z0-9\-]/', '-', $slug));
$slug = trim(preg_replace('/-+/', '-', $slug), '-');

if ($slug !== '' && $slug !== 'index') {
    require __DIR__ . '/tool.php';
    exit;
}

// ── Homepage ─────────────────────────────────────────────────────────────────
$pageTitle = 'PhraseFixTools — 100+ Free Online Text & Developer Tools';
$pageDesc  = 'Free online text tools for developers and writers. JSON formatter, word counter, base64 encoder, case converter, extract emails, and 100+ more tools. No signup, instant results.';
$basePath  = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
$basePath  = ($basePath === '.' ? '' : $basePath);
$canonical = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http')
    . '://' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '/';

function asset_v(string $p): string {
    return $p . '?v=' . (@filemtime(__DIR__ . '/' . ltrim($p,'/')) ?: time());
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle) ?></title>
    <meta name="description" content="<?= htmlspecialchars($pageDesc) ?>">
    <link rel="canonical" href="<?= htmlspecialchars($canonical) ?>">
    <meta name="robots" content="index,follow">
    <meta property="og:title"       content="<?= htmlspecialchars($pageTitle) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($pageDesc) ?>">
    <meta property="og:type"        content="website">
    <meta property="og:url"         content="<?= htmlspecialchars($canonical) ?>">
    <!-- Replace with your AdSense publisher ID -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<?= htmlspecialchars(asset_v('css/style.css')) ?>">
    <script src="<?= htmlspecialchars(asset_v('js/theme-boot.js')) ?>"></script>
</head>
<body data-base-path="<?= htmlspecialchars($basePath) ?>">
<?php include __DIR__ . '/body-inner.html'; ?>
<script type="module" src="<?= htmlspecialchars(asset_v('js/app.js')) ?>"></script>
</body>
</html>

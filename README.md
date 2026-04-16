# plotdesk Example Plugin

A **full-featured reference plugin** for the [plotdesk](https://plotdesk.com) B2B
Enterprise AI platform. This plugin is designed to showcase **every capability** of
the plotdesk Plugin SDK so you can use it as a blueprint for your own plugins.

> This plugin is intentionally kept generic: it adds example tasks, an AI notebook, a
> smart text analyzer and a webhook dispatcher. The focus is not the business value
> itself, but how each SDK feature is wired up end-to-end.

## What is included

| Capability | Where to look |
|------------|---------------|
| **4 Apps** with AI function calling | [`src/Apps/`](src/Apps) |
| **AI Integration** via `PluginAi::call()` | [`src/Apps/Notebook/NotebookApp.php`](src/Apps/Notebook/NotebookApp.php), [`src/Apps/Analyzer/AnalyzerApp.php`](src/Apps/Analyzer/AnalyzerApp.php) |
| **Custom Pages** (Dashboard, Tasks, Notes, Analytics) | [`resources/js/Pages/`](resources/js/Pages) + [`src/Http/Controllers/`](src/Http/Controllers) |
| **Custom Chat Interfaces** (Dashboard, Kanban) | [`resources/js/Interfaces/`](resources/js/Interfaces) |
| **Rich Chat Payloads** | [`resources/js/Payloads/`](resources/js/Payloads) |
| **HTTP Web + API Routes** | [`routes/web.php`](routes/web.php), [`routes/api.php`](routes/api.php) |
| **Database Migrations** | [`database/migrations/`](database/migrations) |
| **Eloquent Models** | [`src/Models/`](src/Models) |
| **Event Listeners** (chat + team events) | [`src/Listeners/`](src/Listeners) |
| **Console Commands** | [`src/Console/`](src/Console) |
| **Scheduled Tasks** | [`src/PlotdeskExamplePluginPlugin.php`](src/PlotdeskExamplePluginPlugin.php) |
| **Permissions** (global + group level) | [`plugin.json`](plugin.json) |
| **Translations** (EN + DE) | [`resources/lang/`](resources/lang) |
| **Plugin Shared Data** (Inertia props) | [`src/PlotdeskExamplePluginPlugin.php`](src/PlotdeskExamplePluginPlugin.php) |

## Apps

### 1. Example Tasks (`TasksApp`)

Lightweight task tracker fully operated through the chat.

| Function | Purpose |
|----------|---------|
| `create_example_task` | Create a task with title, description, priority, status, due date |
| `list_example_tasks` | Return a filtered list of tasks |
| `search_example_tasks` | Fuzzy search by title/description |
| `complete_example_task` | Mark a task done |
| `delete_example_task` | Remove a task |

### 2. Example AI Notebook (`NotebookApp`)

Knowledge capture with AI-generated summaries — showcases `PluginAi::call()`.

| Function | Purpose |
|----------|---------|
| `create_example_note` | Save a note (title + content) |
| `list_example_notes` | List recent notes |
| `search_example_notes` | Full-text search |
| `summarize_example_note` | AI summary in the configured style (bullet / executive / action items) |

### 3. Example Smart Analyzer (`AnalyzerApp`)

AI text utilities backed by `PluginAi::call()`.

| Function | Purpose |
|----------|---------|
| `analyze_example_text` | Sentiment + language + topics |
| `translate_example_text` | Translate between languages |
| `extract_example_entities` | Extract people / places / dates / organizations |

### 4. Example Webhook Dispatcher (`WebhooksApp`)

Fire external HTTP webhooks from chat.

| Function | Purpose |
|----------|---------|
| `dispatch_example_webhook` | POST a JSON payload to the configured URL |
| `list_example_webhook_events` | Show dispatch history |

## Custom Pages

Routes under `/plugins/plotdesk-example-plugin/` rendered via Inertia:

- `/` — Dashboard with stats, recent tasks/notes and activity feed
- `/tasks` — Full task manager (create / edit / delete)
- `/notes` — Two-pane notebook view
- `/analytics` — Charts for last 7 days (permission gated)

## Custom Chat Interfaces

Both interfaces register with `default_chat_enabled: true`, so groups can opt them
into new chats. They call the plugin's own API (`/api/plugins/plotdesk-example-plugin/...`):

- **Dashboard** — live task / note / activity overview for the current group
- **Kanban** — tasks grouped by status or priority, editable in place

## Installation (development)

The plugin lives in `storage/app/plugins-dev/` and will be auto-discovered by the
plotdesk `PluginManager` on every request in the local environment.

```bash
cd storage/app/plugins-dev/plotdesk-example-plugin

composer install
npm install
npm run build

# From the plotdesk project root:
php artisan plugin:bootstrap plotdesk-example-plugin
```

The `plugin:bootstrap` command will run the plugin's migrations and register apps,
navigation, permissions and interfaces.

## Installation (production)

Both `vendor/` and `dist/` are **committed to this repository on purpose**, so the
plugin can be installed on a plotdesk production instance without a build toolchain:

```bash
php artisan plugin:install https://github.com/plotdesk/plotdesk-example-plugin
```

## Directory layout

```
plotdesk-example-plugin/
├── plugin.json              # Manifest: apps, permissions, navigation, payloads, interfaces
├── composer.json            # PHP dependencies
├── package.json             # JS dependencies
├── vite.config.js           # Vite build for pages + payloads + interfaces
├── tailwind.config.js
├── src/
│   ├── PlotdeskExamplePluginPlugin.php   # Plugin ServiceProvider
│   ├── Apps/                # Tasks, Notebook, Analyzer, Webhooks
│   ├── Models/              # Eloquent models
│   ├── Http/                # Controllers + Form Requests
│   ├── Listeners/           # Event listeners
│   ├── Console/             # Artisan commands
│   └── Concerns/            # Shared traits
├── routes/
│   ├── web.php
│   └── api.php
├── resources/
│   ├── js/
│   │   ├── Pages/           # Inertia pages (compiled to dist/pages/)
│   │   ├── Interfaces/      # Chat interfaces (compiled to dist/interfaces/)
│   │   └── Payloads/        # Chat payload components (compiled to dist/payloads/)
│   └── lang/
│       ├── en/plugin.php
│       └── de/plugin.php
├── database/
│   └── migrations/          # Auto-run on plugin:install
├── dist/                    # Built frontend (committed)
└── vendor/                  # Composer dependencies (committed)
```

## License

Proprietary — © plotdesk. Provided as an educational reference.

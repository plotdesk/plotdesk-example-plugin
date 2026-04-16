# plotdesk Plugin SDK

Official SDK for developing plotdesk plugins. Provides base classes, type stubs for IDE autocompletion, and a scaffolding CLI to create new plugin projects.

## Quick Start

```bash
# Install the SDK as a dev dependency
composer require plotdesk/plugin-sdk --dev

# Create a new plugin project
vendor/bin/plotdesk-plugin create my-awesome-plugin
cd my-awesome-plugin
composer install
```

This generates a complete plugin structure with:
- `plugin.json` manifest
- App class with example AI function
- Service provider
- Routes, translations, migrations directories
- Cursor rules for AI-assisted development
- Proper `.gitignore` (vendor/ and dist/ are committed!)

## What Plugins Can Do

- **AI Functions**: Register apps with custom tool calls for the AI
- **Custom Pages**: Own Inertia pages with pre-built Vue components
- **Custom Group Interfaces**: New "View Mode" types in Group Settings
- **Navigation**: Menu items in the sidebar
- **Permissions**: Custom global and group-level permissions
- **Routes**: Web and API endpoints under `/plugins/{id}/`
- **Chat Payloads**: Rich UI components in chat messages
- **Database**: Own tables with migrations
- **AI Access**: Direct AI calls via `PluginAi::call()` or full chat via `PluginChat::run()`
- **Events**: React to chat.created, message.sent, user.joined_team, and more
- **Queue Jobs, Scheduled Tasks, Broadcasting, Notifications, Mail, Cache**

## Plugin Structure

```
my-awesome-plugin/
  plugin.json              # Plugin manifest (apps, permissions, navigation, interfaces)
  composer.json             # Dependencies (SDK as dev dependency)
  .gitignore                # vendor/ and dist/ are NOT ignored!
  src/
    MyAwesomePlugin.php     # Service provider (extends PluginServiceProvider)
    Apps/
      MyAwesome/
        MyAwesomeApp.php    # App class (extends BasicApp, defines AI functions)
    Http/Controllers/       # Optional: custom controllers
    Models/                 # Optional: Eloquent models
  vendor/                   # Composer dependencies (committed to git!)
  dist/                     # Pre-built frontend assets (committed to git!)
    pages/                  # Compiled Vue pages as ESM
    payloads/               # Compiled payload components
    interfaces/             # Compiled interface components
    css/plugin.css          # Compiled Tailwind CSS
  routes/
    web.php                 # Web routes (prefix: /plugins/{id}/)
    api.php                 # API routes (prefix: /api/plugins/{id}/)
  resources/lang/           # Translations
  database/migrations/      # Database migrations (table prefix required!)
  .cursor/rules/            # AI IDE rules for development assistance
```

## AI Function Example

```php
class MyAwesomeApp extends BasicApp
{
    public function getFunctions(): array
    {
        return [[
            'name' => 'search_customers',
            'label' => 'Search Customers',
            'description' => 'Search the customer database',
            'parameters' => [
                'type' => 'object',
                'properties' => [
                    'query' => ['type' => 'string', 'description' => 'Search query'],
                ],
                'required' => ['query'],
            ],
        ]];
    }

    public function SearchCustomers($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp): string
    {
        $query = data_get($arguments, 'query');
        $message->setLoading('search', 'Searching customers...');

        $results = $this->doSearch($query);

        $message->removeLoading('search');
        $message->attachPayload('search_customers', $arguments, ['results' => $results]);

        return "Found " . count($results) . " customers for: {$query}";
    }
}
```

## Direct AI Access

```php
// Simple AI call (prompt in, text out)
$result = PluginAi::call(
    team: $this->team,
    systemPrompt: 'Classify this lead as hot, warm, or cold.',
    userPrompt: $leadDescription,
    contextType: 'plugin:my-plugin:classify',
);

// Full chat with platform access (silos, tables, apps, etc.)
$analysis = PluginChat::run(
    team: $this->team,
    groupId: $groupId,
    userMessage: 'Analyze the customer history for #123',
    contextType: 'plugin:my-plugin:analyze',
);
```

## Custom Group Interface

```json
{
  "interfaces": [{
    "id": "my-dashboard",
    "name": "Custom Dashboard",
    "description": "Interactive customer dashboard",
    "component": "Dashboard",
    "default_chat_enabled": true,
    "settings_fields": [
      {"key": "api_url", "type": "url", "label": "API Endpoint"},
      {"key": "refresh", "type": "select", "label": "Refresh", "options": [
        {"value": "30", "label": "30s"}, {"value": "60", "label": "1min"}
      ]}
    ]
  }]
}
```

The component is loaded from `dist/interfaces/Dashboard.js` and receives `group`, `chat`, and `interfaceSettings` as props.

## Important Conventions

- **Table prefix**: All database tables must use the plugin ID as prefix (e.g., `my_plugin_contacts`)
- **App ID prefix**: App IDs must start with the plugin ID
- **vendor/ committed**: The plugin ships its own dependencies (no `composer install` on the server)
- **dist/ committed**: Pre-built frontend assets are committed (no `yarn build` on the server)
- **Permissions namespaced**: Use unique names like `view_my_dashboard`, not `view_dashboard`

## IDE Support

The SDK includes type stubs for all plotdesk classes (ChatMessage, Team, User, Group, StorageService, BasicApp, etc.). Your IDE will provide full autocompletion for plotdesk APIs.

The generated `.cursor/rules/plotdesk-plugin.mdc` file provides comprehensive AI assistance rules for Cursor IDE, documenting all available APIs, patterns, and conventions.

## Installation on plotdesk

Plugins are installed via the Plugin Management UI in plotdesk (Platform Admin > Plugins). The admin connects GitHub, selects the plugin repository, and installs it with one click. Auto-updates are supported via GitHub webhooks.

## Requirements

- PHP 8.2+
- plotdesk 4.50+

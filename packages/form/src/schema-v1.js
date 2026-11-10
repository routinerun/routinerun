// Written by the app's own reader (WrittenRoutineSchema.swift); do not edit. A test
// in the app fails while this is not what the reader would write.
export default {
  "$defs" : {
    "action" : {
      "anyOf" : [
        {
          "description" : "runs a Shortcuts shortcut by its exact name, handing it the input if there is one",
          "properties" : {
            "shortcut" : {
              "anyOf" : [
                {
                  "type" : "string"
                },
                {
                  "properties" : {
                    "input" : {
                      "type" : "string"
                    },
                    "name" : {
                      "type" : "string"
                    }
                  },
                  "required" : [
                    "name",
                    "input"
                  ],
                  "type" : "object"
                }
              ]
            }
          },
          "required" : [
            "shortcut"
          ],
          "type" : "object"
        },
        {
          "description" : "opens a link",
          "properties" : {
            "open" : {
              "pattern" : "^[A-Za-z][A-Za-z0-9+.-]*:",
              "type" : "string"
            }
          },
          "required" : [
            "open"
          ],
          "type" : "object"
        },
        {
          "description" : "says the words out loud, in my phone's language unless \"lang\" names another",
          "properties" : {
            "say" : {
              "anyOf" : [
                {
                  "type" : "string"
                },
                {
                  "properties" : {
                    "lang" : {
                      "type" : "string"
                    },
                    "language" : {
                      "type" : "string"
                    },
                    "text" : {
                      "type" : "string"
                    }
                  },
                  "required" : [
                    "text"
                  ],
                  "type" : "object"
                }
              ]
            }
          },
          "required" : [
            "say"
          ],
          "type" : "object"
        },
        {
          "description" : "puts the text on the clipboard",
          "properties" : {
            "copy" : {
              "type" : "string"
            }
          },
          "required" : [
            "copy"
          ],
          "type" : "object"
        },
        {
          "description" : "asks me to write a note, with this as the prompt",
          "properties" : {
            "note" : {
              "type" : "string"
            }
          },
          "required" : [
            "note"
          ],
          "type" : "object"
        },
        {
          "description" : "adds one to a number value",
          "properties" : {
            "count" : {
              "type" : "string"
            }
          },
          "required" : [
            "count"
          ],
          "type" : "object"
        },
        {
          "description" : "sets a value to the current moment",
          "properties" : {
            "now" : {
              "type" : "string"
            }
          },
          "required" : [
            "now"
          ],
          "type" : "object"
        },
        {
          "description" : "keeps how long this step took",
          "properties" : {
            "howLong" : {
              "type" : "string"
            }
          },
          "required" : [
            "howLong"
          ],
          "type" : "object"
        },
        {
          "description" : "moves the run on: next, pause, finish or stop",
          "properties" : {
            "run" : {
              "enum" : [
                "next",
                "pause",
                "finish",
                "stop"
              ]
            }
          },
          "required" : [
            "run"
          ],
          "type" : "object"
        },
        {
          "description" : "sets a value",
          "properties" : {
            "set" : {
              "properties" : {
                "key" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : "string"
                },
                "to" : {
                  "type" : "string"
                }
              },
              "required" : [
                "key"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "set"
          ],
          "type" : "object"
        },
        {
          "description" : "adds a number to a value",
          "properties" : {
            "add" : {
              "properties" : {
                "key" : {
                  "type" : "string"
                },
                "number" : {
                  "type" : "number"
                }
              },
              "required" : [
                "key"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "add"
          ],
          "type" : "object"
        },
        {
          "description" : "adds a line to a text value",
          "properties" : {
            "addLine" : {
              "properties" : {
                "key" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : "string"
                },
                "to" : {
                  "type" : "string"
                }
              },
              "required" : [
                "key"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "addLine"
          ],
          "type" : "object"
        },
        {
          "description" : "sends a request to a server; method is GET, POST, PUT or DELETE, POST if left out",
          "properties" : {
            "webhook" : {
              "properties" : {
                "body" : {

                },
                "headers" : {
                  "additionalProperties" : {
                    "type" : "string"
                  },
                  "type" : "object"
                },
                "method" : {
                  "enum" : [
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE"
                  ]
                },
                "url" : {
                  "pattern" : "^https?://",
                  "type" : "string"
                }
              },
              "required" : [
                "url"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "webhook"
          ],
          "type" : "object"
        },
        {
          "description" : "puts an event in my calendar, starting in so many minutes and lasting so many",
          "properties" : {
            "event" : {
              "properties" : {
                "in" : {
                  "type" : "integer"
                },
                "minutes" : {
                  "type" : "integer"
                },
                "notes" : {
                  "type" : "string"
                },
                "title" : {
                  "type" : "string"
                }
              },
              "required" : [
                "title"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "event"
          ],
          "type" : "object"
        },
        {
          "description" : "adds a reminder to Reminders, due in so many minutes",
          "properties" : {
            "reminder" : {
              "properties" : {
                "in" : {
                  "type" : "integer"
                },
                "list" : {
                  "type" : "string"
                },
                "notes" : {
                  "type" : "string"
                },
                "title" : {
                  "type" : "string"
                }
              },
              "required" : [
                "title"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "reminder"
          ],
          "type" : "object"
        },
        {
          "description" : "rings an alarm in so many minutes",
          "properties" : {
            "alarm" : {
              "properties" : {
                "in" : {
                  "type" : "integer"
                },
                "title" : {
                  "type" : "string"
                }
              },
              "required" : [
                "title",
                "in"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "alarm"
          ],
          "type" : "object"
        },
        {
          "description" : "runs a Home scene by its exact name",
          "properties" : {
            "scene" : {
              "anyOf" : [
                {
                  "type" : "string"
                },
                {
                  "properties" : {
                    "home" : {
                      "type" : "string"
                    },
                    "name" : {
                      "type" : "string"
                    }
                  },
                  "required" : [
                    "name"
                  ],
                  "type" : "object"
                }
              ]
            }
          },
          "required" : [
            "scene"
          ],
          "type" : "object"
        },
        {
          "description" : "writes to Health: water (ml), mindful (minutes) or weight (kg)",
          "properties" : {
            "health" : {
              "properties" : {
                "amount" : {
                  "type" : [
                    "number",
                    "string"
                  ]
                },
                "log" : {
                  "enum" : [
                    "water",
                    "mindful",
                    "weight"
                  ]
                }
              },
              "required" : [
                "log",
                "amount"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "health"
          ],
          "type" : "object"
        },
        {
          "description" : "calls a Home Assistant service; \"data\" adds fields, \"address\" is where it answers if not homeassistant.local",
          "properties" : {
            "homeassistant" : {
              "properties" : {
                "address" : {
                  "type" : "string"
                },
                "call" : {
                  "type" : "string"
                },
                "data" : {
                  "type" : "object"
                },
                "entity" : {
                  "type" : "string"
                },
                "secret" : {
                  "type" : "string"
                }
              },
              "required" : [
                "call"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "homeassistant"
          ],
          "type" : "object"
        },
        {
          "description" : "posts to a Slack channel through its incoming webhook",
          "properties" : {
            "slack" : {
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : "string"
                }
              },
              "required" : [
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "slack"
          ],
          "type" : "object"
        },
        {
          "description" : "pushes a message through ntfy, to a topic I name",
          "properties" : {
            "ntfy" : {
              "properties" : {
                "server" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : "string"
                },
                "title" : {
                  "type" : "string"
                },
                "topic" : {
                  "type" : "string"
                }
              },
              "required" : [
                "topic",
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "ntfy"
          ],
          "type" : "object"
        },
        {
          "description" : "triggers, acknowledges or resolves a PagerDuty incident; trigger needs a summary",
          "properties" : {
            "pagerduty" : {
              "properties" : {
                "action" : {
                  "type" : "string"
                },
                "key" : {
                  "type" : "string"
                },
                "secret" : {
                  "type" : "string"
                },
                "severity" : {
                  "type" : "string"
                },
                "summary" : {
                  "type" : "string"
                }
              },
              "required" : [
                "action"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "pagerduty"
          ],
          "type" : "object"
        },
        {
          "description" : "fires an IFTTT webhook event with up to three values",
          "properties" : {
            "ifttt" : {
              "properties" : {
                "event" : {
                  "type" : "string"
                },
                "secret" : {
                  "type" : "string"
                },
                "values" : {
                  "items" : {
                    "type" : "string"
                  },
                  "type" : "array"
                }
              },
              "required" : [
                "event"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "ifttt"
          ],
          "type" : "object"
        },
        {
          "description" : "posts a message to a Discord channel through the channel's webhook",
          "properties" : {
            "discord" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "required" : [
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "discord"
          ],
          "type" : "object"
        },
        {
          "description" : "posts a message to a Discord channel through the channel's webhook",
          "properties" : {
            "preset:discord" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "required" : [
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "preset:discord"
          ],
          "type" : "object"
        },
        {
          "description" : "posts a message to a Google Chat space through its webhook",
          "properties" : {
            "googlechat" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "required" : [
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "googlechat"
          ],
          "type" : "object"
        },
        {
          "description" : "posts a message to a Google Chat space through its webhook",
          "properties" : {
            "preset:googlechat" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "required" : [
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "preset:googlechat"
          ],
          "type" : "object"
        },
        {
          "description" : "tells a Healthchecks.io check that this happened, so it can say when one day it did not",
          "properties" : {
            "healthchecks" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                }
              },
              "type" : "object"
            }
          },
          "required" : [
            "healthchecks"
          ],
          "type" : "object"
        },
        {
          "description" : "tells a Healthchecks.io check that this happened, so it can say when one day it did not",
          "properties" : {
            "preset:healthchecks" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                }
              },
              "type" : "object"
            }
          },
          "required" : [
            "preset:healthchecks"
          ],
          "type" : "object"
        },
        {
          "description" : "pushes a notification to your devices through Pushover; \"title\" may be left out",
          "properties" : {
            "pushover" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                },
                "title" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "required" : [
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "pushover"
          ],
          "type" : "object"
        },
        {
          "description" : "pushes a notification to your devices through Pushover; \"title\" may be left out",
          "properties" : {
            "preset:pushover" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                },
                "title" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "required" : [
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "preset:pushover"
          ],
          "type" : "object"
        },
        {
          "description" : "sends a message from your own Telegram bot to a chat you name",
          "properties" : {
            "telegram" : {
              "additionalProperties" : false,
              "properties" : {
                "chat" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                },
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "required" : [
                "chat",
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "telegram"
          ],
          "type" : "object"
        },
        {
          "description" : "sends a message from your own Telegram bot to a chat you name",
          "properties" : {
            "preset:telegram" : {
              "additionalProperties" : false,
              "properties" : {
                "chat" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                },
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "required" : [
                "chat",
                "text"
              ],
              "type" : "object"
            }
          },
          "required" : [
            "preset:telegram"
          ],
          "type" : "object"
        },
        {
          "description" : "starts a Zap that begins with Webhooks by Zapier, Catch Hook, handing it the run, the step and a message; \"text\" may be left out",
          "properties" : {
            "zapier" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "type" : "object"
            }
          },
          "required" : [
            "zapier"
          ],
          "type" : "object"
        },
        {
          "description" : "starts a Zap that begins with Webhooks by Zapier, Catch Hook, handing it the run, the step and a message; \"text\" may be left out",
          "properties" : {
            "preset:zapier" : {
              "additionalProperties" : false,
              "properties" : {
                "secret" : {
                  "type" : "string"
                },
                "text" : {
                  "type" : [
                    "string",
                    "number",
                    "boolean"
                  ]
                }
              },
              "type" : "object"
            }
          },
          "required" : [
            "preset:zapier"
          ],
          "type" : "object"
        },
        {
          "description" : "A word this version does not know. It is read as a step action that does nothing, named on the import screen, and kept as it was written.",
          "minProperties" : 1,
          "not" : {
            "anyOf" : [
              {
                "required" : [
                  "shortcut"
                ]
              },
              {
                "required" : [
                  "open"
                ]
              },
              {
                "required" : [
                  "say"
                ]
              },
              {
                "required" : [
                  "copy"
                ]
              },
              {
                "required" : [
                  "note"
                ]
              },
              {
                "required" : [
                  "count"
                ]
              },
              {
                "required" : [
                  "now"
                ]
              },
              {
                "required" : [
                  "howLong"
                ]
              },
              {
                "required" : [
                  "run"
                ]
              },
              {
                "required" : [
                  "set"
                ]
              },
              {
                "required" : [
                  "add"
                ]
              },
              {
                "required" : [
                  "addLine"
                ]
              },
              {
                "required" : [
                  "webhook"
                ]
              },
              {
                "required" : [
                  "event"
                ]
              },
              {
                "required" : [
                  "reminder"
                ]
              },
              {
                "required" : [
                  "alarm"
                ]
              },
              {
                "required" : [
                  "scene"
                ]
              },
              {
                "required" : [
                  "health"
                ]
              },
              {
                "required" : [
                  "homeassistant"
                ]
              },
              {
                "required" : [
                  "slack"
                ]
              },
              {
                "required" : [
                  "ntfy"
                ]
              },
              {
                "required" : [
                  "pagerduty"
                ]
              },
              {
                "required" : [
                  "ifttt"
                ]
              },
              {
                "required" : [
                  "discord"
                ]
              },
              {
                "required" : [
                  "preset:discord"
                ]
              },
              {
                "required" : [
                  "googlechat"
                ]
              },
              {
                "required" : [
                  "preset:googlechat"
                ]
              },
              {
                "required" : [
                  "healthchecks"
                ]
              },
              {
                "required" : [
                  "preset:healthchecks"
                ]
              },
              {
                "required" : [
                  "pushover"
                ]
              },
              {
                "required" : [
                  "preset:pushover"
                ]
              },
              {
                "required" : [
                  "telegram"
                ]
              },
              {
                "required" : [
                  "preset:telegram"
                ]
              },
              {
                "required" : [
                  "zapier"
                ]
              },
              {
                "required" : [
                  "preset:zapier"
                ]
              }
            ]
          },
          "type" : "object"
        }
      ],
      "description" : "One word and what it is about, like {\"say\": \"Good morning\"}."
    },
    "button" : {
      "allOf" : [
        {
          "$ref" : "#/$defs/action"
        },
        {
          "properties" : {
            "label" : {
              "type" : "string"
            },
            "onNext" : {
              "type" : "boolean"
            },
            "title" : {
              "type" : "string"
            }
          }
        }
      ]
    },
    "step" : {
      "not" : {
        "description" : "both \"by\" and \"startBy\"",
        "required" : [
          "by",
          "startBy"
        ]
      },
      "properties" : {
        "about" : {
          "description" : "How or why, in Markdown.",
          "type" : "string"
        },
        "alarm" : {
          "type" : "boolean"
        },
        "buttons" : {
          "description" : "What waits for a tap.",
          "items" : {
            "$ref" : "#/$defs/button"
          },
          "type" : "array"
        },
        "by" : {
          "description" : "Finished by: a time of day, or a date and time.",
          "pattern" : "^(([01]?[0-9]|2[0-3]):[0-5][0-9]|[0-9]{4}-[0-9]{2}-[0-9]{2}([ T][0-9]{2}:[0-9]{2}(:[0-9]{2})?)?)$",
          "type" : "string"
        },
        "byDate" : {
          "properties" : {
            "date" : {
              "type" : "string"
            },
            "days" : {
              "type" : "number"
            },
            "hours" : {
              "type" : "number"
            }
          },
          "required" : [
            "date"
          ],
          "type" : "object"
        },
        "byMinutesFromStart" : {
          "type" : "integer"
        },
        "byValue" : {
          "properties" : {
            "days" : {
              "type" : "number"
            },
            "hours" : {
              "type" : "number"
            },
            "value" : {
              "pattern" : "\\S",
              "type" : "string"
            }
          },
          "required" : [
            "value"
          ],
          "type" : "object"
        },
        "colour" : {
          "anyOf" : [
            {
              "enum" : [
                "red",
                "orange",
                "yellow",
                "green",
                "mint",
                "teal",
                "blue",
                "indigo",
                "purple",
                "pink",
                "brown",
                "grey"
              ]
            },
            {
              "pattern" : "^#[0-9A-Fa-f]{6}$",
              "type" : "string"
            }
          ]
        },
        "day" : {
          "minimum" : 1,
          "type" : "integer"
        },
        "does" : {
          "description" : "What happens on arriving at the step.",
          "items" : {
            "$ref" : "#/$defs/action"
          },
          "type" : "array"
        },
        "followUp" : {
          "properties" : {
            "alarm" : {
              "type" : "boolean"
            },
            "at" : {
              "pattern" : "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
              "type" : "string"
            },
            "days" : {
              "type" : "integer"
            },
            "hours" : {
              "type" : "number"
            },
            "name" : {
              "type" : "string"
            },
            "soonerIf" : {
              "type" : "string"
            },
            "wholeRun" : {
              "type" : "boolean"
            },
            "workdays" : {
              "type" : "boolean"
            }
          },
          "type" : "object"
        },
        "late" : {
          "enum" : [
            "skip",
            "keep",
            "ask"
          ]
        },
        "links" : {
          "items" : {
            "properties" : {
              "title" : {
                "type" : "string"
              },
              "url" : {
                "pattern" : "^https?://",
                "type" : "string"
              }
            },
            "required" : [
              "title",
              "url"
            ],
            "type" : "object"
          },
          "type" : "array"
        },
        "minutes" : {
          "description" : "How long it runs, where it has a clock.",
          "minimum" : 0,
          "type" : "number"
        },
        "startBy" : {
          "description" : "Begun by: a time of day, or a date and time.",
          "pattern" : "^(([01]?[0-9]|2[0-3]):[0-5][0-9]|[0-9]{4}-[0-9]{2}-[0-9]{2}([ T][0-9]{2}:[0-9]{2}(:[0-9]{2})?)?)$",
          "type" : "string"
        },
        "symbol" : {
          "type" : "string"
        },
        "tellMe" : {
          "enum" : [
            "alarm",
            "notification",
            "calendar",
            "reminders"
          ]
        },
        "times" : {
          "type" : "integer"
        },
        "title" : {
          "description" : "What to do, as an instruction.",
          "pattern" : "\\S",
          "type" : "string"
        },
        "values" : {
          "additionalProperties" : {
            "$ref" : "#/$defs/value"
          },
          "description" : "Named values, as \"name\": value — words, a number, true or false, or a link.",
          "type" : "object"
        },
        "waitsOut" : {
          "description" : "Next waits until \"minutes\" have run out, for a step whose length is the point rather than an estimate. Ignored on a step with no \"minutes\".",
          "type" : "boolean"
        },
        "warnHours" : {
          "minimum" : 0,
          "type" : "number"
        },
        "was" : {
          "minimum" : 1,
          "type" : "integer"
        }
      },
      "required" : [
        "title"
      ],
      "type" : "object"
    },
    "value" : {
      "type" : [
        "string",
        "number",
        "boolean"
      ]
    }
  },
  "$schema" : "https://json-schema.org/draft/2020-12/schema",
  "description" : "A routine as an assistant writes one and as Routine Run hands one out: in a share link, under a published code, in a file an organisation hosts. Names rather than identifiers, step numbers rather than ids, one word per action. Built from the app's own reader; written-routine.md beside it says how it changes.",
  "properties" : {
    "about" : {
      "description" : "What it is for, in Markdown.",
      "type" : "string"
    },
    "asksWhatToKeep" : {
      "description" : "Whether a run asks what to keep when it ends. Left out, it asks.",
      "type" : "boolean"
    },
    "colour" : {
      "anyOf" : [
        {
          "enum" : [
            "red",
            "orange",
            "yellow",
            "green",
            "mint",
            "teal",
            "blue",
            "indigo",
            "purple",
            "pink",
            "brown",
            "grey"
          ]
        },
        {
          "pattern" : "^#[0-9A-Fa-f]{6}$",
          "type" : "string"
        }
      ]
    },
    "dates" : {
      "items" : {
        "description" : "A date the steps and starts are counted from, by name.",
        "properties" : {
          "name" : {
            "pattern" : "\\S",
            "type" : "string"
          },
          "on" : {
            "description" : "The day, or the day and time. Left out while it is not known.",
            "pattern" : "^[0-9]{4}-[0-9]{2}-[0-9]{2}([ T][0-9]{2}:[0-9]{2}(:[0-9]{2})?)?$",
            "type" : "string"
          }
        },
        "required" : [
          "name"
        ],
        "type" : "object"
      },
      "type" : "array"
    },
    "from" : {
      "description" : "Which routine this is, where it already exists on the phone: eight characters of its identifier. Left exactly as it was handed out, and never invented.",
      "type" : "string"
    },
    "name" : {
      "description" : "What the routine is called.",
      "pattern" : "\\S",
      "type" : "string"
    },
    "nudge" : {
      "description" : "For a list that stays open, the time of day it says how much is waiting.",
      "pattern" : "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
      "type" : "string"
    },
    "once" : {
      "description" : "Something that happens once: finishing its run puts it away.",
      "type" : "boolean"
    },
    "order" : {
      "description" : "How freely somebody walking it may move about its steps. \"inOrder\": every step is listed, only the one in hand opens, and there is no Later. \"oneAtATime\": only the steps done and the one in hand are shown. Left out, or \"free\", any step can be read ahead and Later is there.",
      "enum" : [
        "free",
        "inOrder",
        "oneAtATime"
      ]
    },
    "rounds" : {
      "description" : "Steps that go round, by number, counting from one. No \"times\" is until I have had enough.",
      "properties" : {
        "from" : {
          "minimum" : 1,
          "type" : "integer"
        },
        "through" : {
          "minimum" : 1,
          "type" : "integer"
        },
        "times" : {
          "minimum" : 1,
          "type" : "integer"
        }
      },
      "required" : [
        "from",
        "through"
      ],
      "type" : "object"
    },
    "routineRun" : {
      "const" : 1,
      "description" : "The form this is written in. Always 1."
    },
    "runName" : {
      "description" : "What each run is called, naming a value: \"Due diligence: {param:company}\".",
      "type" : "string"
    },
    "severalAtOnce" : {
      "description" : "Several runs may go at once.",
      "type" : "boolean"
    },
    "startsFrom" : {
      "items" : {
        "description" : "A start offered so many days before (negative) or after a named date.",
        "properties" : {
          "at" : {
            "pattern" : "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
            "type" : "string"
          },
          "date" : {
            "type" : "string"
          },
          "days" : {
            "type" : "integer"
          },
          "minutes" : {
            "type" : "integer"
          }
        },
        "required" : [
          "date"
        ],
        "type" : "object"
      },
      "type" : "array"
    },
    "staysOpen" : {
      "description" : "A list that is never done: it waits when it is empty rather than finishing.",
      "type" : "boolean"
    },
    "steps" : {
      "description" : "The steps, in order. Empty only for a list that stays open.",
      "items" : {
        "$ref" : "#/$defs/step"
      },
      "type" : "array"
    },
    "symbol" : {
      "description" : "An SF Symbols name.",
      "type" : "string"
    },
    "tags" : {
      "items" : {
        "type" : "string"
      },
      "type" : "array"
    },
    "times" : {
      "items" : {
        "description" : "A time it offers to start, on the days named or every day.",
        "properties" : {
          "at" : {
            "pattern" : "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
            "type" : "string"
          },
          "days" : {
            "items" : {
              "enum" : [
                "mon",
                "tue",
                "wed",
                "thu",
                "fri",
                "sat",
                "sun"
              ]
            },
            "type" : "array"
          }
        },
        "required" : [
          "at"
        ],
        "type" : "object"
      },
      "type" : "array"
    },
    "values" : {
      "additionalProperties" : {
        "$ref" : "#/$defs/value"
      },
      "description" : "Named values, as \"name\": value — words, a number, true or false, or a link.",
      "type" : "object"
    }
  },
  "required" : [
    "routineRun",
    "name",
    "steps"
  ],
  "title" : "Routine Run: a routine, written (form 1)",
  "type" : "object"
};

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
    "deadline" : {
      "description" : "When the step has to be done by, or begun by.",
      "not" : {
        "description" : "both \"by\" and \"startBy\"",
        "required" : [
          "by",
          "startBy"
        ]
      },
      "properties" : {
        "by" : {
          "description" : "Finished by: a time of day, or a date and time.",
          "pattern" : "^(([01]?[0-9]|2[0-3]):[0-5][0-9]|[0-9]{4}-[0-9]{2}-[0-9]{2}([ T][0-9]{2}:[0-9]{2}(:[0-9]{2})?)?)$",
          "type" : "string"
        },
        "day" : {
          "description" : "Which day of the run, counting the first as 1.",
          "minimum" : 1,
          "type" : "integer"
        },
        "from" : {
          "anyOf" : [
            {
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
            {
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
            }
          ],
          "description" : "Counted from a named date or a value the routine or run carries, instead of a time of day. Negative is before."
        },
        "late" : {
          "enum" : [
            "skip",
            "keep",
            "ask"
          ]
        },
        "startBy" : {
          "description" : "Begun by: a time of day, or a date and time.",
          "pattern" : "^(([01]?[0-9]|2[0-3]):[0-5][0-9]|[0-9]{4}-[0-9]{2}-[0-9]{2}([ T][0-9]{2}:[0-9]{2}(:[0-9]{2})?)?)$",
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
        "warn" : {
          "allOf" : [
            {
              "additionalProperties" : false,
              "minProperties" : 1,
              "properties" : {
                "days" : {
                  "type" : "number"
                },
                "hours" : {
                  "type" : "number"
                },
                "minutes" : {
                  "type" : "number"
                }
              },
              "type" : "object"
            }
          ],
          "description" : "How far ahead it is said as well. Left out, a day ahead for anything more than a day off."
        },
        "within" : {
          "allOf" : [
            {
              "additionalProperties" : false,
              "minProperties" : 1,
              "properties" : {
                "days" : {
                  "type" : "number"
                },
                "hours" : {
                  "type" : "number"
                },
                "minutes" : {
                  "type" : "number"
                }
              },
              "type" : "object"
            }
          ],
          "description" : "So long after the run starts, instead of a time of day."
        }
      },
      "type" : "object"
    },
    "reaction" : {
      "properties" : {
        "does" : {
          "items" : {
            "$ref" : "#/$defs/action"
          },
          "minItems" : 1,
          "type" : "array"
        },
        "on" : {
          "anyOf" : [
            {
              "enum" : [
                "finish",
                "stop",
                "pause",
                "blocked",
                "anyStatus",
                "anyStep",
                "firstStep",
                "lastStep",
                "anyDeadline"
              ]
            },
            {
              "properties" : {
                "step" : {
                  "minimum" : 1,
                  "type" : "integer"
                }
              },
              "required" : [
                "step"
              ],
              "type" : "object"
            },
            {
              "properties" : {
                "deadline" : {
                  "minimum" : 1,
                  "type" : "integer"
                }
              },
              "required" : [
                "deadline"
              ],
              "type" : "object"
            }
          ]
        }
      },
      "required" : [
        "on",
        "does"
      ],
      "type" : "object"
    },
    "step" : {
      "properties" : {
        "buttons" : {
          "description" : "What waits for a tap.",
          "items" : {
            "$ref" : "#/$defs/button"
          },
          "type" : "array"
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
        "deadline" : {
          "$ref" : "#/$defs/deadline"
        },
        "description" : {
          "description" : "How or why, in Markdown.",
          "type" : "string"
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
        "notes" : {
          "description" : "Notes on the step, one string each, in Markdown.",
          "items" : {
            "pattern" : "\\S",
            "type" : "string"
          },
          "type" : "array"
        },
        "repeats" : {
          "description" : "How many times it is done in all.",
          "minimum" : 1,
          "type" : "integer"
        },
        "symbol" : {
          "type" : "string"
        },
        "tags" : {
          "description" : "Words the step is filed under.",
          "items" : {
            "pattern" : "\\S",
            "type" : "string"
          },
          "type" : "array"
        },
        "title" : {
          "description" : "What to do, as an instruction.",
          "pattern" : "\\S",
          "type" : "string"
        },
        "triggers" : {
          "description" : "Check-ins: each asks a \"question\" while a run is on this step.",
          "items" : {
            "$ref" : "#/$defs/trigger"
          },
          "type" : "array"
        },
        "values" : {
          "additionalProperties" : {
            "$ref" : "#/$defs/value"
          },
          "description" : "Named values, as \"name\": value — words, a number, true or false, or a link.",
          "type" : "object"
        },
        "waitsOut" : {
          "description" : "Next waits until \"minutes\" have run out. Ignored on a step with no \"minutes\".",
          "type" : "boolean"
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
    "trigger" : {
      "properties" : {
        "answers" : {
          "description" : "A check-in's answers. Left out, next.",
          "items" : {
            "enum" : [
              "offer",
              "start",
              "next",
              "pause",
              "resume",
              "later",
              "stop",
              "finish"
            ]
          },
          "type" : "array"
        },
        "does" : {
          "enum" : [
            "offer",
            "start",
            "next",
            "pause",
            "resume",
            "later",
            "stop",
            "finish"
          ]
        },
        "name" : {
          "type" : "string"
        },
        "question" : {
          "description" : "Makes it a check-in, asked until it is answered. On a step only.",
          "type" : "string"
        },
        "tellMe" : {
          "enum" : [
            "notification",
            "alarm",
            "calendar",
            "reminders"
          ]
        },
        "when" : {
          "$ref" : "#/$defs/when"
        }
      },
      "required" : [
        "when"
      ],
      "type" : "object"
    },
    "value" : {
      "anyOf" : [
        {
          "type" : [
            "string",
            "number",
            "boolean"
          ]
        },
        {
          "additionalProperties" : false,
          "properties" : {
            "text" : {
              "type" : "string"
            }
          },
          "required" : [
            "text"
          ],
          "type" : "object"
        },
        {
          "additionalProperties" : false,
          "properties" : {
            "number" : {
              "type" : "number"
            }
          },
          "required" : [
            "number"
          ],
          "type" : "object"
        },
        {
          "additionalProperties" : false,
          "properties" : {
            "day" : {
              "pattern" : "^[0-9]{4}-[0-9]{2}-[0-9]{2}([ T][0-9]{2}:[0-9]{2}(:[0-9]{2})?)?$",
              "type" : "string"
            }
          },
          "required" : [
            "day"
          ],
          "type" : "object"
        },
        {
          "additionalProperties" : false,
          "properties" : {
            "date" : {
              "pattern" : "^[0-9]{4}-[0-9]{2}-[0-9]{2}([ T][0-9]{2}:[0-9]{2}(:[0-9]{2})?)?$",
              "type" : "string"
            }
          },
          "required" : [
            "date"
          ],
          "type" : "object"
        },
        {
          "additionalProperties" : false,
          "properties" : {
            "time" : {
              "pattern" : "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
              "type" : "string"
            }
          },
          "required" : [
            "time"
          ],
          "type" : "object"
        },
        {
          "additionalProperties" : false,
          "properties" : {
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
      ]
    },
    "when" : {
      "description" : "One moment. Exactly one kind is said.",
      "properties" : {
        "arrive" : {
          "description" : "A saved place, by name.",
          "type" : "string"
        },
        "at" : {
          "description" : "A time of day, with weekdays, a day of the month or a date.",
          "pattern" : "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
          "type" : "string"
        },
        "between" : {
          "description" : "The hours of the day an \"every\" is held to.",
          "items" : {
            "maximum" : 24,
            "minimum" : 0,
            "type" : "integer"
          },
          "maxItems" : 2,
          "minItems" : 2,
          "type" : "array"
        },
        "dayOfMonth" : {
          "anyOf" : [
            {
              "maximum" : 31,
              "minimum" : 1,
              "type" : "integer"
            },
            {
              "const" : "last"
            }
          ]
        },
        "eventAlert" : {
          "description" : "The title of one of your own calendar events, whose alert it answers.",
          "type" : "string"
        },
        "every" : {
          "allOf" : [
            {
              "additionalProperties" : false,
              "minProperties" : 1,
              "properties" : {
                "days" : {
                  "type" : "number"
                },
                "hours" : {
                  "type" : "number"
                },
                "minutes" : {
                  "type" : "number"
                }
              },
              "type" : "object"
            }
          ],
          "description" : "Every so often, by the clock."
        },
        "focus" : {
          "enum" : [
            "on",
            "off"
          ]
        },
        "leave" : {
          "description" : "A saved place, by name.",
          "type" : "string"
        },
        "month" : {
          "maximum" : 12,
          "minimum" : 1,
          "type" : "integer"
        },
        "nth" : {
          "maximum" : 5,
          "minimum" : 1,
          "type" : "integer"
        },
        "on" : {
          "description" : "Once, on this date.",
          "pattern" : "^[0-9]{4}-[0-9]{2}-[0-9]{2}([ T][0-9]{2}:[0-9]{2}(:[0-9]{2})?)?$",
          "type" : "string"
        },
        "reminderAlert" : {
          "description" : "The title of one of your reminders, whose alert it answers.",
          "type" : "string"
        },
        "settle" : {
          "description" : "A saved place, by name.",
          "type" : "string"
        },
        "weekdays" : {
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
        },
        "workoutEnds" : {
          "type" : "boolean"
        }
      },
      "type" : "object"
    }
  },
  "$id" : "https://routinerun.com/schema/routine.v2.json",
  "$schema" : "https://json-schema.org/draft/2020-12/schema",
  "description" : "A routine as an assistant or a person writes one, in the app's own words: names rather than identifiers, step numbers rather than ids, one word per action. Form 1 is still read, and turned into this one by one table (WrittenForm in the app, upgrade in @routinerun/form).",
  "properties" : {
    "asksWhatToKeep" : {
      "description" : "Whether a run asks what to keep when it ends. Left out, it asks.",
      "type" : "boolean"
    },
    "catalogue" : {
      "description" : "Where a starter sits in the catalogue: its file name, its shelf, what it needs. The app reads a routine with one and ignores it.",
      "properties" : {
        "dependsOn" : {
          "items" : {
            "type" : "string"
          },
          "type" : "array"
        },
        "firstShelf" : {
          "type" : "boolean"
        },
        "group" : {
          "type" : "string"
        },
        "licence" : {
          "type" : "string"
        },
        "release" : {
          "minimum" : 1,
          "type" : "integer"
        },
        "shortcuts" : {
          "items" : {
            "type" : "string"
          },
          "type" : "array"
        },
        "slug" : {
          "pattern" : "^[a-z0-9]+(-[a-z0-9]+)*$",
          "type" : "string"
        },
        "startsByItself" : {
          "type" : "boolean"
        },
        "web" : {
          "pattern" : "^https://",
          "type" : "string"
        }
      },
      "required" : [
        "slug",
        "group"
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
    "description" : {
      "description" : "What it is for, in Markdown.",
      "type" : "string"
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
    "notes" : {
      "description" : "Notes on the routine, one string each, in Markdown.",
      "items" : {
        "pattern" : "\\S",
        "type" : "string"
      },
      "type" : "array"
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
      "description" : "How freely somebody walking it may move about its steps: \"inOrder\", \"oneAtATime\" or \"free\".",
      "enum" : [
        "free",
        "inOrder",
        "oneAtATime"
      ]
    },
    "places" : {
      "description" : "Saved places it belongs to, by name. A name the phone has not saved is left out.",
      "items" : {
        "pattern" : "\\S",
        "type" : "string"
      },
      "type" : "array"
    },
    "reactions" : {
      "description" : "What happens when a run gets somewhere.",
      "items" : {
        "$ref" : "#/$defs/reaction"
      },
      "type" : "array"
    },
    "rounds" : {
      "description" : "Steps that go round, by number, counting from one. No \"repeats\" is until I have had enough.",
      "properties" : {
        "from" : {
          "minimum" : 1,
          "type" : "integer"
        },
        "repeats" : {
          "minimum" : 1,
          "type" : "integer"
        },
        "through" : {
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
      "const" : 2,
      "description" : "The form this is written in. 2 for this one; 1 is still read."
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
      "description" : "Words it is filed under.",
      "items" : {
        "pattern" : "\\S",
        "type" : "string"
      },
      "type" : "array"
    },
    "triggers" : {
      "description" : "When it offers to start, or starts. A time with weekdays and nothing else offers to start.",
      "items" : {
        "$ref" : "#/$defs/trigger"
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
  "title" : "Routine Run: a routine, written (form 2)",
  "type" : "object"
};

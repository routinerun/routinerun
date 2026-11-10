// The skin schema as a module, for readers without JSON imports. schema/skin.v1.schema.json is
// the same object, and test/skin.test.js fails while the two differ.
export default {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://routinerun.com/schema/skin.v1.json",
  "title": "Routine Run: a skin (version 1)",
  "description": "How the rows of a page look: their density, their type, their radius and the colours of the ground they stand on. A skin changes nothing about what a row says: the kind word, the dot that says whose a thing is, the routine's group under \"From\" and the order in which a long line is cut are the app's, on every skin. Colours only, no code: a skin is data anybody can write and nobody has to trust.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "skin",
    "name",
    "light",
    "dark",
    "rows",
    "type"
  ],
  "properties": {
    "skin": {
      "const": 1,
      "description": "The version of this shape."
    },
    "name": {
      "type": "string",
      "pattern": "\\S"
    },
    "audience": {
      "type": "string",
      "description": "Who it is for, in a sentence."
    },
    "light": {
      "$ref": "#/$defs/palette"
    },
    "dark": {
      "$ref": "#/$defs/palette"
    },
    "rows": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "padding",
        "minHeight",
        "radius",
        "detailLines",
        "layout"
      ],
      "properties": {
        "padding": {
          "type": "number",
          "minimum": 4,
          "maximum": 16,
          "description": "Points above and below a row's words."
        },
        "minHeight": {
          "type": "number",
          "minimum": 32,
          "maximum": 64,
          "description": "Points. 44 is the system's least for something that is pressed."
        },
        "radius": {
          "type": "number",
          "minimum": 0,
          "maximum": 24,
          "description": "Points, on the card a list of rows sits in."
        },
        "detailLines": {
          "type": "integer",
          "minimum": 1,
          "maximum": 3,
          "description": "How many lines a row's second line may take before it is cut."
        },
        "layout": {
          "enum": [
            "twoLines",
            "oneLine"
          ],
          "description": "\"oneLine\" puts the second line after the name, for a dense screen."
        }
      }
    },
    "type": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "title",
        "detail"
      ],
      "properties": {
        "title": {
          "$ref": "#/$defs/font"
        },
        "detail": {
          "$ref": "#/$defs/font"
        },
        "value": {
          "$ref": "#/$defs/font"
        }
      }
    }
  },
  "$defs": {
    "palette": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "page",
        "card",
        "ink",
        "ink2",
        "ink3",
        "line",
        "fill",
        "accent",
        "unanswered"
      ],
      "properties": {
        "page": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "The ground every card sits on."
        },
        "card": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "A card: a list, a sheet, a row's surface."
        },
        "ink": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "Words at full weight: a row's name."
        },
        "ink2": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "Secondary words: the second line of a row."
        },
        "ink3": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "The quietest words: a chevron, a hint."
        },
        "line": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "A separator between rows."
        },
        "fill": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "A control's resting fill: a stepper, a chip."
        },
        "accent": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "What a press does: a row that acts, a switch that is on."
        },
        "unanswered": {
          "type": "string",
          "pattern": "^(#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?|rgba?\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*(,\\s*(0|1|0?\\.\\d+)\\s*)?\\))$",
          "description": "The dot on what is local and nobody has answered for."
        }
      }
    },
    "font": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "size"
      ],
      "properties": {
        "family": {
          "enum": [
            "system",
            "serif",
            "rounded",
            "mono"
          ],
          "description": "Which of the phone's own families; a skin brings no font files."
        },
        "weight": {
          "enum": [
            400,
            500,
            600
          ]
        },
        "size": {
          "type": "number",
          "minimum": 10,
          "maximum": 20,
          "description": "Points, at the default text size; Dynamic Type scales it."
        }
      }
    }
  }
};

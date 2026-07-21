window.BENCHMARK_DATA = {
  "lastUpdate": 1784657426525,
  "repoUrl": "https://github.com/aashan10/phpantom_lsp",
  "entries": {
    "PHPantom Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "10ccb3942bf66540b36502589cf832f43a680712",
          "message": "Add support for more Blade directives",
          "timestamp": "2026-07-21T17:13:25+02:00",
          "tree_id": "0df520416c21fe2310698b5170ea882591d9e6b9",
          "url": "https://github.com/aashan10/phpantom_lsp/commit/10ccb3942bf66540b36502589cf832f43a680712"
        },
        "date": 1784657426263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 6.601,
            "range": "± 0.379",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.039,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.109,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.152,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.248,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.256,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.051,
            "range": "± 0.030",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.028,
            "range": "± 0.021",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.105,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.05,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.043,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.059,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 4.886,
            "range": "± 0.020",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.231,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.25,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.067,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.044,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.115,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.1,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.081,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.219,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.263,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.793,
            "range": "± 0.104",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.277,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.039,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.036,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75.246,
            "range": "± 0.219",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.635,
            "range": "± 0.060",
            "unit": "ms"
          }
        ]
      }
    ]
  }
}
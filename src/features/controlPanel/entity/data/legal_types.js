const legal_types =  {
    "3 00 00": {
        "code": "3 00 00",
        "full_name": "Организация без прав юридического лица",
        "short_name": null,
        "parent_type": null,
        "children": {
            "1 10 00": {
                "code": "1 10 00",
                "full_name": "Хозяйственное товарищество",
                "short_name": null,
                "parent_type": "3 00 00",
                "children": {
                    "1 10 51": {
                        "code": "1 10 51",
                        "full_name": "Полные товарищества",
                        "short_name": null,
                        "parent_type": "1 10 00"
                    },
                    "1 10 64": {
                        "code": "1 10 64",
                        "full_name": "Товарищества на вере (коммандитные товарищества)",
                        "short_name": null,
                        "parent_type": "1 10 00"
                    }
                }
            },
            "2 00 00": {
                "code": "2 00 00",
                "full_name": "Некоммерческая корпоративная организация",
                "short_name": null,
                "parent_type": "3 00 00",
                "children": {
                    "2 01 00": {
                        "code": "2 01 00",
                        "full_name": "Потребительские кооперативы",
                        "short_name": null,
                        "parent_type": "2 00 00"
                    },
                    "2 02 00": {
                        "code": "2 02 00",
                        "full_name": "Общественные организации",
                        "short_name": null,
                        "parent_type": "2 00 00"
                    },
                    "2 06 00": {
                        "code": "2 06 00",
                        "full_name": "Ассоциации (союзы)",
                        "short_name": null,
                        "parent_type": "2 00 00"
                    },
                    "2 07 00": {
                        "code": "2 07 00",
                        "full_name": "Товарищества собственников недвижимости",
                        "short_name": null,
                        "parent_type": "2 00 00"
                    },
                    "2 11 00": {
                        "code": "2 11 00",
                        "full_name": "Казачьи общества, внесенные в государственный реестр казачьих обществ в Российской Федерации",
                        "short_name": null,
                        "parent_type": "2 00 00"
                    },
                    "2 12 00": {
                        "code": "2 12 00",
                        "full_name": "Общины коренных малочисленных народов Российской Федерации",
                        "short_name": null,
                        "parent_type": "2 00 00"
                    }
                }
            },
            "3 00 01": {
                "code": "3 00 01",
                "full_name": "Представительства юридических лиц",
                "short_name": null,
                "parent_type": "3 00 00"
            },
            "3 00 02": {
                "code": "3 00 02",
                "full_name": "Филиалы юридических лиц",
                "short_name": null,
                "parent_type": "3 00 00"
            },
            "3 00 03": {
                "code": "3 00 03",
                "full_name": "Обособленные подразделения юридических лиц",
                "short_name": null,
                "parent_type": "3 00 00"
            },
            "3 00 04": {
                "code": "3 00 04",
                "full_name": "Структурные подразделения обособленных подразделений юридических лиц",
                "short_name": null,
                "parent_type": "3 00 00"
            },
            "3 00 05": {
                "code": "3 00 05",
                "full_name": "Паевые инвестиционные фонды",
                "short_name": null,
                "parent_type": "3 00 00"
            },
            "3 00 06": {
                "code": "3 00 06",
                "full_name": "Простые товарищества",
                "short_name": null,
                "parent_type": "3 00 00"
            },
            "3 00 08": {
                "code": "3 00 08",
                "full_name": "Районные суды, городские суды, межрайонные суды (районные суды)",
                "short_name": null,
                "parent_type": "3 00 00"
            }
        }
    },
    "4 00 00": {
        "code": "4 00 00",
        "full_name": "Международная организация",
        "short_name": null,
        "parent_type": null,
        "children": {
            "4 00 01": {
                "code": "4 00 01",
                "full_name": "Межправительственные международные организации",
                "short_name": null,
                "parent_type": "4 00 00"
            },
            "4 00 02": {
                "code": "4 00 02",
                "full_name": "Неправительственные международные организации",
                "short_name": null,
                "parent_type": "4 00 00"
            }
        }
    },
    "5 00 00": {
        "code": "5 00 00",
        "full_name": "Физическое лицо",
        "short_name": null,
        "parent_type": null,
        "children": {
            "5 01 00": {
                "code": "5 01 00",
                "full_name": "Коммерческая деятельность",
                "short_name": null,
                "parent_type": "5 00 00",
                "children": {
                    "5 01 01": {
                        "code": "5 01 01",
                        "full_name": "Главы крестьянских (фермерских) хозяйств",
                        "short_name": null,
                        "parent_type": "5 01 00"
                    },
                    "5 01 02": {
                        "code": "5 01 02",
                        "full_name": "Индивидуальный предприниматель",
                        "short_name": "ИП",
                        "parent_type": "5 01 00"
                    }
                }
            },
            "5 02 00": {
                "code": "5 02 00",
                "full_name": "Непредпринимательская деятельность",
                "short_name": null,
                "parent_type": "5 00 00",
                "children": {
                    "5 02 01": {
                        "code": "5 02 01",
                        "full_name": "Адвокаты, учредившие адвокатский кабинет",
                        "short_name": null,
                        "parent_type": "5 02 00"
                    },
                    "5 02 02": {
                        "code": "5 02 02",
                        "full_name": "Нотариусы, занимающиеся частной практикой",
                        "short_name": null,
                        "parent_type": "5 02 00"
                    }
                }
            }
        }
    },
    "6 00 00": {
        "code": "6 00 00",
        "full_name": "Коммерческая унитарная организация",
        "short_name": null,
        "parent_type": null,
        "children": {
            "6 50 00": {
                "code": "6 50 00",
                "full_name": "Унитарные предприятия",
                "short_name": null,
                "parent_type": "6 00 00"
            },
            "6 51 00": {
                "code": "6 51 00",
                "full_name": "Унитарные предприятия, основанные на праве оперативного управления (казенные предприятия)",
                "short_name": null,
                "parent_type": "6 00 00",
                "children": {
                    "6 51 41": {
                        "code": "6 51 41",
                        "full_name": "Федеральные казенные предприятия",
                        "short_name": null,
                        "parent_type": "6 51 00"
                    },
                    "6 51 42": {
                        "code": "6 51 42",
                        "full_name": "Казенные предприятия субъектов Российской Федерации",
                        "short_name": null,
                        "parent_type": "6 51 00"
                    },
                    "6 51 43": {
                        "code": "6 51 43",
                        "full_name": "Муниципальные казенные предприятия",
                        "short_name": null,
                        "parent_type": "6 51 00"
                    }
                }
            },
            "6 52 00": {
                "code": "6 52 00",
                "full_name": "Унитарные предприятия, основанные на праве хозяйственного ведения",
                "short_name": null,
                "parent_type": "6 00 00",
                "children": {
                    "6 52 41": {
                        "code": "6 52 41",
                        "full_name": "Федеральные государственные унитарные предприятия",
                        "short_name": null,
                        "parent_type": "6 52 00"
                    },
                    "6 52 42": {
                        "code": "6 52 42",
                        "full_name": "Государственные унитарные предприятия субъектов Российской Федерации",
                        "short_name": null,
                        "parent_type": "6 52 00"
                    },
                    "6 52 43": {
                        "code": "6 52 43",
                        "full_name": "Муниципальные унитарные предприятия",
                        "short_name": null,
                        "parent_type": "6 52 00"
                    }
                }
            }
        }
    },
    "7 00 00": {
        "code": "7 00 00",
        "full_name": "Некоммерческая унитарная организация",
        "short_name": null,
        "parent_type": null,
        "children": {
            "7 04 00": {
                "code": "7 04 00",
                "full_name": "Фонд",
                "short_name": null,
                "parent_type": "7 00 00",
                "children": {
                    "7 04 01": {
                        "code": "7 04 01",
                        "full_name": "Благотворительный фонд",
                        "short_name": null,
                        "parent_type": "7 04 00"
                    },
                    "7 04 02": {
                        "code": "7 04 02",
                        "full_name": "Негосударственный пенсионный фонд",
                        "short_name": "НПФ",
                        "parent_type": "7 04 00"
                    },
                    "7 04 03": {
                        "code": "7 04 03",
                        "full_name": "Общественный фонд",
                        "short_name": null,
                        "parent_type": "7 04 00"
                    },
                    "7 04 04": {
                        "code": "7 04 04",
                        "full_name": "Экологический фонд",
                        "short_name": null,
                        "parent_type": "7 04 00"
                    }
                }
            },
            "7 14 00": {
                "code": "7 14 00",
                "full_name": "Автономная некоммерческая организация",
                "short_name": null,
                "parent_type": "7 00 00"
            },
            "7 15 00": {
                "code": "7 15 00",
                "full_name": "Религиозная организация",
                "short_name": null,
                "parent_type": "7 00 00"
            },
            "7 16 00": {
                "code": "7 16 00",
                "full_name": "Публично-правовая компания",
                "short_name": null,
                "parent_type": "7 00 00",
                "children": {
                    "7 16 01": {
                        "code": "7 16 01",
                        "full_name": "Государственныя корпорация",
                        "short_name": null,
                        "parent_type": "7 16 00"
                    },
                    "7 16 02": {
                        "code": "7 16 02",
                        "full_name": "Государственныя компания",
                        "short_name": null,
                        "parent_type": "7 16 00"
                    },
                    "7 16 10": {
                        "code": "7 16 10",
                        "full_name": "Отделение иностранной некоммерческой неправительственной организации",
                        "short_name": null,
                        "parent_type": "7 16 00"
                    }
                }
            },
            "7 50 00": {
                "code": "7 50 00",
                "full_name": "Учреждение",
                "short_name": null,
                "parent_type": "7 00 00",
                "children": {
                    "7 55 00": {
                        "code": "7 55 00",
                        "full_name": "Частные учреждения",
                        "short_name": null,
                        "parent_type": "7 50 00"
                    },
                    "7 53 00": {
                        "code": "7 53 00",
                        "full_name": "Государственная академия наук",
                        "short_name": null,
                        "parent_type": "7 50 00"
                    },
                    "7 54 00": {
                        "code": "7 54 00",
                        "full_name": "Учреждение, созданное муниципальным образованием (муниципальное учреждение)",
                        "short_name": null,
                        "parent_type": "7 50 00"
                    },
                    "7 51 00": {
                        "code": "7 51 00",
                        "full_name": "Учреждение, созданное Российской Федерацией",
                        "short_name": null,
                        "parent_type": "7 50 00"
                    },
                    "7 52 00": {
                        "code": "7 52 00",
                        "full_name": "Учреждение, созданное субъектом Российской Федерации",
                        "short_name": null,
                        "parent_type": "7 50 00"
                    }
                }
            }
        }
    },
    "1 00 00": {
        "code": "1 00 00",
        "full_name": "Коммерческая корпоративная организация",
        "short_name": null,
        "parent_type": null,
        "children": {
            "1 20 00": {
                "code": "1 20 00",
                "full_name": "Хозяйственные общества",
                "short_name": null,
                "parent_type": "1 00 00"
            },
            "1 22 00": {
                "code": "1 22 00",
                "full_name": "Акционерные общества",
                "short_name": null,
                "parent_type": "1 00 00",
                "children": {
                    "1 22 47": {
                        "code": "1 22 47",
                        "full_name": "Публичные акционерные общества",
                        "short_name": null,
                        "parent_type": "1 22 00"
                    },
                    "1 22 67": {
                        "code": "1 22 67",
                        "full_name": "Непубличные акционерные общества",
                        "short_name": null,
                        "parent_type": "1 22 00"
                    }
                }
            },
            "1 23 00": {
                "code": "1 23 00",
                "full_name": "Общества с ограниченной ответственностью",
                "short_name": null,
                "parent_type": "1 00 00"
            },
            "1 30 00": {
                "code": "1 30 00",
                "full_name": "Хозяйственные партнерства",
                "short_name": null,
                "parent_type": "1 00 00"
            },
            "1 40 00": {
                "code": "1 40 00",
                "full_name": "Производственные кооперативы (артели)",
                "short_name": null,
                "parent_type": "1 00 00"
            },
            "1 41 00": {
                "code": "1 41 00",
                "full_name": "Сельскохозяйственные производственные кооперативы",
                "short_name": null,
                "parent_type": "1 00 00",
                "children": {
                    "1 41 53": {
                        "code": "1 41 53",
                        "full_name": "Сельскохозяйственные артели (колхозы)",
                        "short_name": null,
                        "parent_type": "1 41 00"
                    },
                    "1 41 54": {
                        "code": "1 41 54",
                        "full_name": "Рыболовецкие артели (колхозы)",
                        "short_name": null,
                        "parent_type": "1 41 00"
                    },
                    "1 41 55": {
                        "code": "1 41 55",
                        "full_name": "Кооперативные хозяйства (коопхозы)",
                        "short_name": null,
                        "parent_type": "1 41 00"
                    }
                }
            },
            "1 42 00": {
                "code": "1 42 00",
                "full_name": "Производственные кооперативы (кроме сельскохозяйственных производственных кооперативов)",
                "short_name": null,
                "parent_type": "1 00 00"
            },
            "1 53 00": {
                "code": "1 53 00",
                "full_name": "Крестьянские (фермерские) хозяйства",
                "short_name": null,
                "parent_type": "1 00 00"
            },
            "1 90 00": {
                "code": "1 90 00",
                "full_name": "Прочие юридические лица, являющиеся коммерческими организациями",
                "short_name": null,
                "parent_type": "1 00 00"
            }
        }
    }
}

module.exports = { legal_types }

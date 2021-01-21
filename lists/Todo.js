const { Text, Checkbox, CalendarDay } = require('@keystonejs/fields');

const now = new Date();
const years = 10;
const thenDate = new Date(new Date().setFullYear(now.getFullYear() + years));

module.exports = {
    fields: {
        description: {
            type: Text,
            isRequired: true,
        },
        isComplete: {
            type: Checkbox,
            defaultValue: false,
        },
        deadline: {
            type: CalendarDay,
            dateFrom: now.toISOString('YYYY-MM-DD').substring(0, 10),
            dateTo: thenDate.toISOString('YYYY-MM-DD').substring(0, 10),
            isRequired: false,
            defaultValue: now.toISOString('YYYY-MM-DD').substring(0, 10), // Today's date
        },
        assignee: {
            type: Text,
            isRequired: true,
        },
    },
};

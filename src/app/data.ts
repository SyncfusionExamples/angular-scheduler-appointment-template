/**
 * Schedule datasource
 */

export let resourceData: Object[] = [
    {
        Id: 1,
        Subject: 'Testing-1',
        StartTime: new Date(2018, 3, 7, 10),
        EndTime: new Date(2018, 3, 7, 12),
        IsAllDay: false,
        IsReadonly: true,
        TaskId: 2
    }, {
        Id: 2,
        Subject: 'Testing-2',
        StartTime: new Date(2018, 3, 10),
        EndTime: new Date(2018, 3, 10),
        IsAllDay: true,
        IsReadonly: true,
        TaskId: 2
    }
];
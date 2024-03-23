// import * as React from "react"

// import { cn } from "../../lib/utils"

// const Table = React.forwardRef((props, ref) => (
//     <div className="relative w-full overflow-auto">
//       <table {...props} ref={ref} className={cn("w-full caption-bottom text-sm", props.className)} />
//     </div>
//   ));
//   Table.displayName = 'Table';

//   const TableHeader = React.forwardRef((props, ref) => (
//     <thead {...props} ref={ref} className={cn("[&_tr]:border-b", props.className)} />
//   ));
//   TableHeader.displayName = 'TableHeader'

// const TableBody = React.forwardRef<
//   HTMLTableSectionElement>((props, ref) => (
//   <tbody
//     ref={ref}
//     className={cn("[&_tr:last-child]:border-0", props.className)}
//   />
// ))
// TableBody.displayName = "TableBody"

// const TableFooter = React.forwardRef<
//   HTMLTableSectionElement>((props, ref) => (
//   <tfoot
//     ref={ref}
//     className={cn(
//       "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
//       props.className
//     )}
//   />
// ))
// TableFooter.displayName = "TableFooter"

// const TableRow = React.forwardRef<
//   HTMLTableRowElement>((props, ref) => (
//   <tr
//     ref={ref}
//     className={cn(
//       "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
//       props.className
//     )}
//   />
// ))
// TableRow.displayName = "TableRow"

// const TableHead = React.forwardRef<
//   HTMLTableCellElement>((props, ref) => (
//   <th
//     ref={ref}
//     className={cn(
//       "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
//       props.className
//     )}
   
//   />
// ))
// TableHead.displayName = "TableHead"

// const TableCell = React.forwardRef<
//   HTMLTableCellElement>((props, ref) => (
//   <td
//     ref={ref}
//     className={cn(
//       "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
//       props.className
//     )}
//   />
// ))
// TableCell.displayName = "TableCell"

// const TableCaption = React.forwardRef<
//   HTMLTableCaptionElement>((props, ref) => (
//   <caption
//     ref={ref}
//     className={cn("mt-4 text-sm text-muted-foreground", props.className)}
//   />
// ))
// TableCaption.displayName = "TableCaption"

// export {
//   Table,
//   TableHeader,
//   TableBody,
//   TableFooter,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableCaption,
// }

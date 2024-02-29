import {
  CopyCheckIcon,
  KeyRoundIcon,
  LogInIcon,
  MailIcon,
  MoreVerticalIcon,
  SettingsIcon,
  Trash2Icon,
} from "lucide-react";
import styles from "./App.module.css";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Badge } from "./ui/Badge";
import { Calendar } from "./ui/Calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/AlertDialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/Dialog";
import { Switch } from "./ui/Switch";
import { DatePicker } from "./ui/DatePicker";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ui/DropdownMenu";

function App() {
  const [date, setDate] = useState<Date>();
  const [dates, setDates] = useState<DateRange>();
  const [multiDates, setMultiDates] = useState<Date[]>();
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h1>Meteor UI Library</h1>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Button</h2>
            <p>
              The Button component is used to trigger an action or event, such
              as submitting a form or opening a dialog. It should not be used in
              place of a link when redirecting to another page or external
              resource. It should also not be wrapped in a link or another
              focusable element.
            </p>
            <p>
              Buttons should be focused using the keyboard, and should be usable
              via the keyboard alone. Use appropriate ARIA roles and states to
              ensure that buttons are accessible to all users.
            </p>
          </div>
          <h3>Props</h3>
          <ul>
            <li>
              <code>variant</code> - The visual style of the button. One of
              "default", "subtle", "destructive", "outline", or "ghost".
            </li>
            <li>
              <code>icon</code> - Whether the button should be displayed as an
              icon button.
            </li>
            <li>
              <code>rounded</code> - Whether the button should be displayed with
              rounded corners.
            </li>
            <li>
              <code>small</code> - Whether the button should be displayed at a
              smaller size.
            </li>
            <li>
              <code>fill</code> - Whether the button should be displayed as a
              block-level element.
            </li>
            <li>
              <code>loading</code> - Whether the button should be displayed as
              loading.
            </li>
          </ul>
          <div className={styles.grid}>
            <Button>Click Me</Button>
            <Button variant="subtle">Click Me</Button>
            <Button variant="destructive">Click Me</Button>
            <Button variant="outline">Click Me</Button>
            <Button variant="ghost">Click Me</Button>
            <Button>
              <CopyCheckIcon /> Click Me
            </Button>
            <Button
              loading
              onClick={() => {
                console.log("Button clicked");
              }}
            >
              Loading
            </Button>
            <Button disabled>Click Me</Button>
            <Button rounded>Click Me</Button>
            <Button icon>
              <CopyCheckIcon />
            </Button>
            <Button icon rounded>
              <CopyCheckIcon />
            </Button>
            <Button small>Click Me</Button>
            <Button rounded small>
              Click Me
            </Button>
            <Button icon small>
              <CopyCheckIcon />
            </Button>
            <Button fill>Click Me</Button>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Input</h2>
            <p>
              Used to collect data from the user. It should be used in forms,
              along with other input components, buttons, and labels. The input
              should be labeled to provide context and meaning to the user. If
              no label is provided, the placeholder text should be descriptive
              and provide context to the user.
            </p>
            <p>
              Inputs should be focused using the keyboard, and should be usable
              via the keyboard alone. Use appropriate ARIA roles and states to
              ensure that inputs are accessible to all users.
            </p>
            <h3>Props</h3>
            <ul>
              <li>
                <code>mirror</code> - Whether the input should be displayed with
                a mirror effect.
              </li>
              <li>
                <code>fill</code> - Whether the input should be displayed as a
                block-level element.
              </li>
              <li>
                <code>icon</code> - Whether the input should be displayed with
                an icon.
              </li>
            </ul>
          </div>
          <div className={styles.grid}>
            <Input placeholder="johndoe@email.com" />
            <Input placeholder="johndoe@email.com" icon={<MailIcon />} />
            <Input placeholder="johndoe@email.com" icon={<MailIcon />} mirror />
            <Input placeholder="johndoe@email.com" disabled />
            <Input placeholder="johndoe@email.com" fill />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Badge</h2>
            <p>
              Used to display a small amount of information, such as a count or
              status. It should be used in conjunction with other components to
              provide context and meaning to the user.
            </p>
            <h3>Props</h3>
            <ul>
              <li>
                <code>variant</code> - The visual style of the badge. One of
                "default", "solid", "destructive", "warning", or "subtle".
              </li>
              <li>
                <code>rounded</code> - Whether the badge should be displayed
                with rounded corners.
              </li>
            </ul>
          </div>
          <div className={styles.grid}>
            <Badge>default</Badge>
            <Badge variant="solid">solid</Badge>
            <Badge variant="destructive">destructive</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="subtle">subtle</Badge>
            <Badge rounded>rounded</Badge>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Select</h2>
            <p>The select component is used to select an option from a list.</p>
          </div>
          <div className={styles.grid}>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select item" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Group 1</SelectLabel>
                  <SelectSeparator />
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i} value={`Item ${i + 1}`}>
                      Item {i + 1}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Date Picker</h2>
            <p>
              The date picker component is used to select a date or range of
              dates. It is composed of the <code>Popover</code> and{" "}
              <code>Calendar</code> components.
            </p>
          </div>
          <div className={styles.grid}>
            <DatePicker />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Calendar</h2>
            <p>
              The calendar component is used to select a date or range of dates.
              It can be used in conjuction with date inputs or popovers for date
              selection.
            </p>
          </div>
          <div className={styles.grid}>
            <Calendar mode="single" selected={date} onSelect={setDate} />
            <Calendar mode="range" selected={dates} onSelect={setDates} />
            <Calendar
              mode="multiple"
              selected={multiDates}
              onSelect={setMultiDates}
            />
            <Calendar
              mode="range"
              selected={dates}
              onSelect={setDates}
              initialFocus
              numberOfMonths={2}
              fixedWeeks
              pagedNavigation
            />
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              captionLayout="dropdown"
              fromYear={2010}
              toYear={2025}
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Alert Dialog</h2>
            <p>
              The alert dialog component is used to display a message to the
              user. It should be used to communicate important information to
              the user, such as an error or warning that requires immediate
              attention.
            </p>
          </div>
          <div className={styles.grid}>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2Icon /> Delete Photo
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Photo?</AlertDialogTitle>
                </AlertDialogHeader>
                <p
                  style={{
                    textAlign: "center",
                    color: "var(--figure-gray-secondary)",
                  }}
                >
                  Are you sure you want to delete this photo? This action cannot
                  be undone. Please confirm.
                </p>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Button variant="destructive">Confirm</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Dialog</h2>
            <p>
              The dialog component is used to display a modal window to the
              user. It should be used to collect information from the user, or
              to display additional information or options.
            </p>
          </div>
          <div className={styles.grid}>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <LogInIcon /> Sign In
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign In</DialogTitle>
                </DialogHeader>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      color: "var(--figure-gray-secondary)",
                    }}
                  >
                    Sign in to your account to access your photos, videos, and
                    more.
                  </p>
                  <Input placeholder="Email" icon={<MailIcon />} />
                  <Input
                    placeholder="Password"
                    type="password"
                    icon={<KeyRoundIcon />}
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <Button>Sign In</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Switch</h2>
            <p>
              The switch component is used to toggle a setting on or off. It
              should be used in settings, preferences, or other areas where a
              binary choice is required.
            </p>
          </div>
          <div className={styles.grid}>
            <Switch /> <Switch disabled />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Dropdown Menu</h2>
            <p>
              The dropdown menu component is used to display a list of options
              to the user.
            </p>
          </div>
          <div className={styles.grid}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MoreVerticalIcon /> Open
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem inset>
                  <CopyCheckIcon />
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuItem inset disabled>
                  <CopyCheckIcon />
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={true}>
                  Tomato
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Cucumber</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Onion</DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="tomato">
                  <DropdownMenuLabel>Preferred fruit</DropdownMenuLabel>
                  <DropdownMenuRadioItem value="tomato">
                    Tomato
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="cucumber">
                    Cucumber
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="onion">
                    Onion
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  View customer <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More Actions</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem inset>
                      <SettingsIcon /> Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
      </article>
    </main>
  );
}

export default App;

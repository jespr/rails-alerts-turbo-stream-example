# README

@leenyburger asked a good question on Twitter about how to insert notifications on a page as a response to some action, tweet here: https://x.com/leenyburger/status/1732108826701332682?s=20

I was confused by how to do this with stimulus as well initially when I started playing around with it. But this is a very rough approach to how I'd do it. And this repo serves as the response to that tweet.

## Approach

### Turbo frame
- Add a turbo_frame_tag :alerts in the layout of the application (see: https://github.com/jespr/rails-alerts-turbo-stream-example/blob/main/app/views/layouts/application.html.erb#L15)
- Have the controller action respond to turbo_stream requests (see: https://github.com/jespr/rails-alerts-turbo-stream-example/blob/main/app/controllers/connections_controller.rb#L18)
- Do something in a partial when that request comes in (or it could be done in the controller for simplicity, but I like seperating those and treating it as a view - see: https://github.com/jespr/rails-alerts-turbo-stream-example/blob/main/app/views/connections/test.turbo_stream.erb). This will append the partial, to the turbo_frame_tag we added in the view.
- We can use something like the alerts_controller from [tailwind-stimulus-components](https://github.com/excid3/tailwindcss-stimulus-components/blob/master/docs/alert.md) to add interactivity to the alert inserted. We hook that up by adding `data-controller="alert"` to our alert in the partial (see: https://github.com/jespr/rails-alerts-turbo-stream-example/blob/main/app/views/shared/_alert.html.erb), and hook up the close button by adding `data-action="alert#close` to the button.



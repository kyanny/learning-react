desc 'dev'
task :default do
  spawn('jsx -w -x jsx src/ build/')
  spawn('python -m SimpleHTTPServer 8000')
  Process.waitall
end

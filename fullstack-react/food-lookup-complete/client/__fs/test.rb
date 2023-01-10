#!/usr/bin/env ruby

require 'fileutils'

src_dir = File.expand_path(File.join(File.dirname(__FILE__), '../src/tests/complete'))
src_files = Dir[File.join(src_dir, 'FoodSearch.test.complete*')]
temp_files = []
src_files.each do |src_file|
  m = src_file.match(/complete(-\d+)/)
  appendage = m ? m[1] : ''
  temp_file = File.expand_path(File.join(src_dir, '..', "FoodSearch.complete#{appendage}.test.js"))
  FileUtils.cp src_file, temp_file
  temp_files << temp_file
end

system 'CI=true npm test'

temp_files.each do |temp_file|
  FileUtils.rm temp_file
end
